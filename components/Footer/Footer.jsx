import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import PTLogo from '../PTLogo/PTLogo'     // custom logo component
import PTNav from '../PTNav/PTNav'
import stl from './Footer.module.scss'

function Footer() {
  return (
    <>
      <footer className={ `${stl.footer} py-35 py-md-45` }>
        <Container fluid="xxl">

          <Row>
            <Col
              xs={{ span: 12, order: 'first' }}
              lg="3"
              className="d-flex justify-content-center justify-content-lg-start mb-35"
            >
              <PTLogo />
            </Col>

            <Col
              xs={{ span: 6, order: 2 }}
              md="12"
              lg="9"
              className="mb-15 mb-lg-35"
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
              <Link className={ stl.footer__legal } href="/legal#privacy">
                Политика конфиденциальности
              </Link>
            </Col>

            <Col
              xs={{ span: 12, order: 'last'}}
              xl={{ span: 4, order: 4 }}
              className="
                d-flex align-items-xl-end justify-content-center
                mt-35 mt-xl-0
              "
            >
              <span className={ stl.footer__copyright }>
                © ProninTeam 2022
              </span>
            </Col>

            <Col
              xs={{ span: 6, order: 3 }}
              md="12"
              lg={{ span: 6, order: 4 }}
              xl={{ span: 4, order: 'last' }}
              className='
                d-flex
                flex-column flex-md-row
                justify-content-md-center justify-content-lg-end
                mb-15 mb-lg-0
              '
            >
              <div className={ stl.footer__group }>
                <span className={ stl.group__title }>Позвонить</span>
                <a className={ stl.group__link } href="tel:+79272703006">+7 927 270-30-06</a>
              </div>

              <div className={ stl.footer__group }>
                <span className={ stl.group__title }>Написать</span>
                <a className={ stl.group__link } href="mailto:mail@yandex.ru">mail@yandex.ru</a>
              </div>
            </Col>
          </Row>

        </Container>
      </footer>
    </>
  )
}

export default Footer
