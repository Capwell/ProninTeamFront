import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import PTLogo from '../PTLogo/PTLogo'     // custom logo component
import PTNav from '../PTNav/PTNav'
import stl from './Footer.module.scss'

function Footer() {
  return (
    <>
      <footer className={ `${ stl._wrapper } py-35 py-md-45` }>
        <Container fluid="xxl">
          <Row>
{/* Logo */}
            <Col
              xs={{ span: 12, order: 'first' }}
              lg="3"
              className="d-flex justify-content-center justify-content-lg-start mb-35"
            >
              <PTLogo />
            </Col>
{/* Menu */}
            <Col
              xs={{ span: 6, order: 2 }}
              md="12"
              lg="9"
              className="mb-35"
            >
              <PTNav
                layout="footer"
                links={[
                  ['/#brief', 'Стать клиентом'],
                  ['/services', 'Услуги'],
                  ['/cases', 'Кейсы'],
                  ['/team', 'Наша команда']
                ]}
              />
            </Col>
{/* Legal link */}
            <Col
              xs={{ span: 12, order: 4 }}
              lg={{ span: 6, order: 3 }}
              xl="4"
              className="
                d-flex
                justify-content-center justify-content-lg-start
                align-items-end
              "
            >
              <Link className={ stl._legal } href="/legal#privacy">
                Политика конфиденциальности
              </Link>
            </Col>
{/* Copyright */}
            <Col
              xs={{ span: 12, order: 'last'}}
              xl={{ span: 4, order: 4 }}
              className="
                d-flex align-items-xl-end justify-content-center
                mt-15 mt-lg-35 mt-xl-0
              "
            >
              <span className={ stl._copyright }>
                © ProninTeam 2022
              </span>
            </Col>
{/* Contacts */}
            <Col
              xs={{ span: 6, order: 3 }}
              md="12"
              lg={{ span: 6, order: 4 }}
              xl={{ span: 4, order: 'last' }}
              className="
                d-flex
                flex-column flex-md-row
                justify-content-between justify-content-md-center justify-content-lg-end
                mb-35 mb-lg-0
              "
            >
              <div className={ stl._contact }>
                <span className={ stl._contact_title }>Позвонить</span>
                <a className={ stl._contact_link } href="tel:+79272703006">+7 927 270-30-06</a>
              </div>

              <div className={ stl._contact }>
                <span className={ stl._contact_title }>Написать</span>
                <a className={ stl._contact_link } href="mailto:a@proninteam.ru">a@proninteam.ru</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
