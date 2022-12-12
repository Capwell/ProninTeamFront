import Link from 'next/link'
import { useState, useRef } from 'react'
import stl from './PTNav.module.scss'
import BurgerBtn from './BurgerBtn/BurgerBtn'

function PTNav({ layout, links = [] }) {
  const [isAnimation, setIsAnimation] = useState(false)
  const menu = useRef()

  const showNav = (menuElem) => {
    menuElem.classList.add(stl.shown)
    menu.current.addEventListener('click', burgerMenuClickHandler)
  }

  const hideNav = (menuElem) => {
    menuElem.classList.remove(stl.shown)
    menu.current.removeEventListener('click', burgerMenuClickHandler)
  }

  const toogleNav = () => {
    // if menu is opening - block clicking
    if (isAnimation) return

    const menuElem = menu.current
    setIsAnimation(true) // start animation

    menuElem.classList.contains(stl.shown)
    ? hideNav(menuElem)
    : showNav(menuElem)
    // finish animation after 700 ms
    setTimeout(() => setIsAnimation(false), 500)
  }

  const burgerMenuClickHandler = (e) => {
    if (e.target.classList.contains('nav__link')) {
      hideNav(menu.current)
    }
  }

  return (
    <>
      {
        layout === 'header' &&
        <BurgerBtn className={ stl._btn } onClick={ toogleNav } />
      }

      <nav className={ stl[`_wrapper_${layout}`] } ref={ menu }>
        {
          links.map((link, index) => {
            const [linkRef, linkText] = [...link]
            return (
              <Link
                key={ `link-${index}` }
                className={ `${ stl._link } nav__link` }
                href={ linkRef }
              >
                { linkText }
              </Link>
            )
          })
        }
      </nav>
    </>
  )
}

export default PTNav