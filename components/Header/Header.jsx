import Link from 'next/link'
import { useState, useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import PTLogo from '../PTLogo/PTLogo'
import stl from './Header.module.scss'

function Header() {
  const nav = useRef()
  const [isAnimation, setIsAnimation] = useState(false)

  const showNav = (menuElem) => {
    menuElem.classList.add(stl.shown)
    nav.current.addEventListener('click', burgerMenuClickHandler)
  }

  const hideNav = (menuElem) => {
    menuElem.classList.remove(stl.shown)
    nav.current.removeEventListener('click', burgerMenuClickHandler)
  }

  const toogleNav = () => {
    // if menu is opening - block clicking
    if (isAnimation) return

    const menu = nav.current
    setIsAnimation(true) // start animation

    menu.classList.contains(stl.shown)
    ? hideNav(menu)
    : showNav(menu)
    // finish animation after 700 ms
    setTimeout(() => setIsAnimation(false), 500)
  }

  const burgerMenuClickHandler = e => {
    if (e.target.classList.contains(stl.nav__link)) {
      hideNav(nav.current)
    }
  }

  return (
    <header className={ `${stl.header} py-20 py-lg-35` }>
      <Container fluid="xxl">
        <div className={ stl.header__inner }>
          <PTLogo />

          <Button
            className={ `${ stl.btn_burger } btn btn--burger` }
            onClick={ toogleNav }
          >
            <span />
            <span />
            <span />
          </Button>

          <nav
            className={ stl.header__nav }
            ref={ nav }
            // onClick={ burgerMenuClickHandler }
          >
            <Link className={ stl.nav__link } href="/services">
              Услуги
            </Link>
            <Link className={ stl.nav__link } href="/cases">
              Кейсы
            </Link>
            <Link className={ stl.nav__link } href="/team">
              Наша команда
            </Link>
            <Link className={ stl.nav__link } href="/#brief">
              Стать клиентом
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
