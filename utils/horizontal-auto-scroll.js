const horizontalAutoScroll = (
  elem,                 // scrollable element
  start = 'afterShow',  // position for start scroll
  end = 'beforeHide',   // position for end scroll
  dir = 'toRight'       // scroll direction
) => {
  elem.style.overflowX = 'hidden'
  const wrapper = elem.querySelector('[data-scroll-x]')       // movable element
  const windowHeight = document.documentElement.clientHeight  // document's visible height
  const elemWidth = elem.getBoundingClientRect().width        // visible element's width

  let fullHeight,        // full height of page
      initElemTop,       // initial top value of element
      elemHeight,        // visible element's height
      scrollableWidth,   // scrollable part of movable element
      scrollableHeight,  // the distance during which the scroll lasts
      startTop,          // element top value for start scroll
      endTop,            // element top value for stop scroll
      elemStartY,        // Y-coord of element height for start scroll
      elemEndY           // Y-coord of element height for end scroll

  // check percentages in start or end props and set it
  const checkPercOfHeight = (val, pos) => {
    const percValue = val.match(/^(\d+)%$/)  // check percentages

    if (percValue) {
      const pxValue = (elemHeight / 100) * +percValue[1]  // get pixels from percentages

      if (pos === 'start') {
        startTop = windowHeight - pxValue
        elemStartY = pxValue
      } else {
        endTop = 0 - pxValue
        elemEndY = pxValue
      }
      return true
    }
    return false
  }

  const init = () => {
    fullHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ),
    initElemTop = elem.getBoundingClientRect().top,
    elemHeight = elem.getBoundingClientRect().height,
    scrollableWidth = elem.scrollWidth - elemWidth

    // Set start
    if (!checkPercOfHeight(start, 'start')) {
      if (start === 'beforeShow') {
        startTop = windowHeight
        elemStartY = 0
      } else if (start === 'afterShow') {
        startTop = windowHeight - elemHeight
        elemStartY = elemHeight
      }
    }
    // check if start is invalid on current screen
    if (windowHeight >= (initElemTop + elemStartY)) {
      startTop = initElemTop
    }

    // Set end
    if (!checkPercOfHeight(end, 'end')) {
      if (end === 'beforeHide') {
        endTop = elemEndY = 0
      } else if (end === 'afterHide') {
        endTop = 0 - elemHeight
        elemEndY = elemHeight
      }
    }
    // check if end is invalid on current screen
    if (windowHeight >= (fullHeight - (initElemTop + elemEndY))) {
      endTop = windowHeight - (fullHeight - initElemTop)
    }

    // Set direction
    wrapper.style.transform = `translateX(-${ dir === 'toLeft' ? scrollableWidth : 0 }px)`

    scrollableHeight = startTop - endTop
  }

  init()

  const scrollHandler = () => {
    const elemTop = elem.getBoundingClientRect().top
    let value
    // if current scroll position is ABOVE start point
    if (elemTop >= startTop) value = dir === 'toRight' ? 0 : scrollableWidth
    // if current scroll position is BELOW start point
    if (elemTop <= endTop) value = dir === 'toRight' ? scrollableWidth: 0
    // get translateX value
    if (elemTop < startTop && elemTop > endTop) {
      value = dir === 'toRight'
        ? (scrollableWidth * (startTop - elemTop)) / scrollableHeight
        : (scrollableWidth * (elemTop - endTop)) / scrollableHeight
    }
    // set value
    wrapper.style.transform = `translateX(-${value}px)`
  }

  window.addEventListener('load', () => init())
  document.addEventListener('scroll', scrollHandler)
}

export default horizontalAutoScroll