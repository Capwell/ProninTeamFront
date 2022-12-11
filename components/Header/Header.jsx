import Link from 'next/link';
import { useRef } from 'react';
import { Button, Container, NavLink } from 'react-bootstrap';
import PTLogo from '../PTLogo/PTLogo';
import stl from './Header.module.scss';

function Header() {
  const nav = useRef()

  const toogleNav = () => {
    nav.current.classList.toggle(stl.shown)
  }

  const burgerMenuClickHandler = e => {
    if (e.target.classList.contains(stl.nav__link)) {
      nav.current.classList.remove(stl.shown)
    }
  }

  return (
    <header className={ `${stl.header} py-25 py-lg-35` }>
      <Container fluid="xxl">
        <div className={ stl.header__inner }>
          <PTLogo />

          <Button
            className={ `${stl.btn_burger} btn btn--burger` }
            onClick={ toogleNav }
          >
            <span />
            <span />
            <span />
          </Button>

          <nav
            className={ stl.header__nav }
            ref={ nav }
            onClick={ burgerMenuClickHandler }
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
