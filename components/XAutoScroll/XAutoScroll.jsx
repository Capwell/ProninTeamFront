import { useRef, useEffect, useState } from 'react'
import horizontalAutoScroll from '../../utils/horizontal-auto-scroll'

function XAutoScroll({
  children,
  className,
  wrapperClass,
  startScroll = '75%',
  endScroll = '35%',
  direction = 'toRight'
}) {
  const elemRef = useRef(null)

  const [scrollableElem, setScrollableElem] = useState()

  useEffect(() => {
    setScrollableElem(elemRef.current)
    scrollableElem && horizontalAutoScroll(scrollableElem, startScroll, endScroll, direction)
  }, [elemRef.current])

  return (
    <div className={ className } ref={ elemRef }>
      <div className={ wrapperClass } data-scroll-x>
        { children }
      </div>
    </div>
  )
}

export default XAutoScroll