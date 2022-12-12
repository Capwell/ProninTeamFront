import { Container } from 'react-bootstrap'
import PTLogo from '../PTLogo/PTLogo'
import PTNav from '../PTNav/PTNav'
import stl from './Header.module.scss'

function Header() {

  return (
    <header className={ `${stl._wrapper} py-20 py-lg-35` }>
      <Container fluid="xxl">
        <div className={ stl._inner }>
          <PTLogo />
          <PTNav
            layout="header"
            links={[
              ['/services', 'Услуги'],
              ['/cases', 'Кейсы'],
              ['/team', 'Наша команда'],
              ['/#brief', 'Стать клиентом']
            ]}
          />
        </div>
      </Container>
    </header>
  )
}

export default Header
