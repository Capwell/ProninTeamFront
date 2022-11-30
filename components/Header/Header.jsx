import Link from "next/link";
import { Button, Container, NavLink } from "react-bootstrap";
import stl from "./Header.module.scss";
import PTLogo from '../PTLogo/PTLogo';
import { useRef } from "react";

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
    <header className={ stl.header + ' py-35' }>
      <Container fluid="xxl">
        <div className={ stl.header__inner }>
          <PTLogo />

          <Button
            className={ stl.btn_burger + ' btn btn--burger' }
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
            <NavLink className={ stl.nav__link } href="/#services">
              Услуги
            </NavLink>
            <Link className={ stl.nav__link } href="/cases">
              Кейсы
            </Link>
            {/* <NavLink className={ stl.nav__link } href="/#about">
              О нас
            </NavLink> */}
            <Link className={ stl.nav__link } href="/team">
              Наша команда
            </Link>
            <NavLink className={ stl.nav__link } href="/#brief">
              Стать клиентом
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
