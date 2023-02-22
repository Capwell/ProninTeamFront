const checkPercOfHeight = (val, height) => {
  const percValue = val.match(/^(\d+)%$/)  // check percentages
  const pxValue   = percValue
    ? (height / 100) * +percValue[1]
    : 0
  return pxValue
}

const init = (elem) => {
  const box = elem.getBoundingClientRect()

  return {
    windowHeight: document.documentElement.clientHeight, // document's visible height
    fullHeight:   Math.max(                              // full height of page
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ),
    wrapper:      elem.querySelector('[data-scroll-x]'), // movable element
    elemTop:      box.top + window.pageYOffset,          // initial top value of element
    elemWidth:    box.width,                             // visible element's width
    elemHeight:   box.height,                            // visible element's height

    startTop:         undefined, // element top value for start scroll
    endTop:           undefined, // element top value for stop scroll
    elemStartY:       undefined, // Y-coord of element height for start scroll
    elemEndY:         undefined, // Y-coord of element height for end scroll
    scrollableWidth:  undefined, // scrollable part of movable element
    scrollableHeight: undefined, // the distance during which the scroll lasts

    setStart(val) {
      if (val === 'beforeShow') {
        this.startTop    = this.windowHeight
        this.elemStartY  = 0
      } else if (val === 'afterShow') {
        this.startTop    = this.windowHeight - this.elemHeight
        this.elemStartY  = this.elemHeight
      } else {
        const pxFromPerc = checkPercOfHeight(val, this.elemHeight)
        this.startTop    = this.windowHeight - pxFromPerc
        this.elemStartY  = pxFromPerc
      }

      // check if start is invalid on current screen
      if (this.windowHeight >= (this.elemTop + this.elemStartY)) {
        this.startTop = this.elemTop
      }
    },

    setEnd(val) {
      if (val === 'beforeHide') {
        this.endTop = this.elemEndY = 0
      } else if (val === 'afterHide') {
        this.endTop      = 0 - this.elemHeight
        this.elemEndY    = this.elemHeight
      } else {
        const pxFromPerc = checkPercOfHeight(val, this.elemHeight)
        this.endTop      = 0 - pxFromPerc
        this.elemEndY    = pxFromPerc
      }

      // check if end is invalid on current screen
      if (this.windowHeight >= (this.fullHeight - (this.elemTop + this.elemEndY))) {
        this.endTop = this.windowHeight - (this.fullHeight - this.elemTop)
      }
    },

    setDirection(val) {
      this.wrapper.style.transform = `translateX(-${ val === 'toLeft' ? this.scrollableWidth : 0 }px)`
    }
  }
}

const horizontalAutoScroll = (
  elem,                 // scrollable element
  start = 'afterShow',  // position for start scroll
  end   = 'beforeHide', // position for end scroll
  dir   = 'toRight'     // scroll direction
) => {
  elem.style.overflowX = 'hidden'

  const props = init(elem)

  props.setStart(start)
  props.setEnd(end)
  props.scrollableWidth  = elem.scrollWidth - props.elemWidth // scrollable part of movable element
  props.scrollableHeight = props.startTop - props.endTop      // the distance during which the scroll lasts
  props.setDirection(dir)

  const scrollHandler = () => {
    const curTop = elem.getBoundingClientRect().top
    const start  = props.startTop
    const end    = props.endTop
    const width  = props.scrollableWidth
    const height = props.scrollableHeight

    let value
    // if current scroll position is ABOVE start point
    if (curTop >= start) value = dir === 'toRight' ? 0 : width
    // if current scroll position is BELOW start point
    if (curTop <= end) value = dir === 'toRight' ? width : 0
    // get translateX value
    if (curTop < start && curTop > end) {
      value = dir === 'toRight'
        ? (width * (start - curTop)) / height
        : (width * (curTop - end)) / height
    }
    // set value
    props.wrapper.style.transform = `translateX(-${value}px)`
  }

  document.addEventListener('scroll', scrollHandler)
}

export default horizontalAutoScroll