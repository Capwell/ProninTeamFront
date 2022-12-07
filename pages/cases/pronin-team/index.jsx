import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import PTHead from '../../../components/PTHead/PTHead'
import PTButton from '../../../components/PTButton/PTButton'
import stl from './pronin-team.module.scss'

function CasePage() {
  const router = useRouter()

  return (
    <>
      <PTHead
        title="ProninTeam - Кейс: ProninTeam"
      />

      <Container fluid="xxl" className="mt-30">
        <PTButton
          className="mb-110"
          variant="small-back"
          onClick={ () => router.back() }
        />
      </Container>
{/* Banner */}
      <div className={ `${stl.banner} mb-100` }>
        <Container fluid="xxl">
          <Row className={ `${stl.banner__inner} py-60` }>
            <Col lg className="mb-40 mb-lg-0">
              <div className={ stl.banner__logo }>
                <Image
                  className={ stl.logo__img }
                  src="/images/cases/pronin-team/proninteam-logo.svg"
                  alt="ProninTeam Logo"
                  fill
                />
              </div>
            </Col>

            <Col xs lg="auto">
              <h1 className={ stl.banner__title }>
                Как мы это делали?
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
{/* Stage 1 */}
      <Container
        as="section"
        fluid="xxl"
        className={ `${ stl.stage } ${ stl.stage_first } mb-100 mb-lg-170` }
      >
        <Row className="mb-50 mb-lg-90">
          <Col lg="10">
            <h2 className={ `${stl.stage__title} mb-25` }>
              <span>Первый этап</span> — подготовительная работа
            </h2>

            <p className={ `${stl.stage__description}` }>
              Мы начали подготовительную работу<br/>
              по разработке сайта нашей компании.<br/>
              <br/>
              <strong>Задача</strong> была сделать многостраничный сайт, чтобы пользователь смог ознакомиться с нашей командой, подробно узнать о наших услугах, реализованных кейсах и оформить заявку на создание программного продукта.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-between align-items-center">
          <Col lg="6" className="mb-50 mb-lg-0">
            <section className={ stl.stage__todo }>
              <h2 className={ stl.todo__title }>
                Что сделали:
              </h2>

              <ul className={ stl.todo__list }>
                <li className={ stl.todo__item }>
                  Подготовили детальный фич-лист.
                </li>
                <li className={ stl.todo__item }>
                  Спроектировали симпатичные варфреймы для каждой страницы сайта.
                </li>
                <li className={ stl.todo__item }>
                  Купили и настроили домен.
                </li>
                <li className={ stl.todo__item }>
                  Создали Django проект с расширенной базовой моделью пользователя.
                </li>
              </ul>
            </section>
          </Col>
          <Col
            xs="12"
            lg="6"
            xl="5"
          >
            <div className={ stl.stage__img }>
              <Image
                className={ stl.img__img }
                src="/images/cases/pronin-team/stage-1.webp"
                alt="Варфреймы первого этапа"
                fill
              />
            </div>
          </Col>
        </Row>
      </Container>
{/* Stage 2 */}
      <Container
        as="section"
        fluid="xxl"
        className={ `${stl.stage} ${stl.stage_second} mb-100 mb-lg-170` }
      >
        <h2 className={ `${stl.stage__title} mb-25 mb-lg-50` }>
          <span>Второй этап</span> — подготовка MVP сайта
        </h2>

        <Row className="mb-50 mb-xl-110">
          <Col xl="7">
            <p className={ stl.stage__description }>
              <strong>После того как мы собрали весь контент для сайта,</strong><br/>
              мы решили катить емкий и красивый лэндинг (вместо многостраничного объемного сайта).<br/>
              <br/>
              К слову, нам нравится работать с Agile за эту возможность&nbsp;—&nbsp;изменять требования и оперативно подстраиваться под них.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg="6" xl="7" className="mb-50 mb-lg-0">
            <section className={ stl.stage__todo }>
              <h2 className={ stl.todo__title }>
                Что сделали:
              </h2>

              <ul className={ stl.todo__list }>
                <li className={ stl.todo__item }>
                  Создали бэк и фронт для нашего лендинга.
                </li>
                <li className={ stl.todo__item }>
                  Подготовили черновой вариант формы для отправки заявки новых клиентов.
                </li>
                <li className={ stl.todo__item }>
                  Купили и настроили домен.
                </li>
                <li className={ stl.todo__item }>
                  На втором этапе также было много чего другого, но не менее важного:<br/>
                  <br/>
                  Подготовили тексты <b>юридических</b> документов:<br/>
                  <br/>
                  <ul>
                    <li>
                      <Link
                        className={ stl.stage__link }
                        href="/legal#consent"
                      >
                        1. Согласие на обработку персональных данных;
                      </Link>
                    </li>
                    <br/>
                    <li>
                      <Link
                        className={ stl.stage__link }
                        href="/legal#privacy"
                      >
                        2. Политика о конфиденциальности;
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </Col>

          <Col
            xs="12"
            lg="6"
            xl="5"
            className="d-flex align-items-center align-items-xl-start mx-auto mx-xl-0"
          >
            <div className={ stl.stage__img }>
              <Image
                className={ stl.img__img }
                src="/images/cases/pronin-team/stage-2.webp"
                alt="Варфреймы второго этапа"
                fill
              />
            </div>
          </Col>
        </Row>
      </Container>
{/* Stage 3 */}
      <Container
        as="section"
        fluid="xxl"
        className={ `${ stl.stage } ${ stl.stage_third } mb-170` }
      >
        <Row className="mb-50 mb-lg-95">
          <Col lg="10">
            <h2 className={ `${stl.stage__title} mb-50` }>
              <span>Третий этап</span> — доработка MVP
            </h2>

            <p className={ `${stl.stage__description}` }>
              Итак, на входе у нас был еще сырой, но работающий MVP и мы приступили к важным <b>доработкам</b>.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-between align-items-center">
          <Col lg="6" xl="7" className="mb-50 mb-lg-0">
            <section className={ stl.stage__todo }>
              <h2 className={ stl.todo__title }>
                Что сделали:
              </h2>

              <ul className={ stl.todo__list }>
                <li className={ stl.todo__item }>
                  Сформировали дизайн - систему и UI-kit.
                </li>
                <li className={ stl.todo__item }>
                  Настроили CI/CD.
                </li>
                <li className={ stl.todo__item }>
                  Доработали форму заявки (чтобы все «кнопочки» работали).
                </li>
                <li className={ stl.todo__item }>
                  Настроили адаптивное отображение для мобильной версии.
                </li>
                <li className={ stl.todo__item }>
                  Решили все-таки сделать отдельную страницу про нашу команду. Спроектировали дизайн, сделали фронт и бэк.
                </li>
              </ul>
            </section>
          </Col>

          <Col
            xs="12"
            lg="6"
            xl="5"
            className="mx-auto mx-lg-0"
          >
            <div className={ stl.stage__img }>
              <Image
                className={ stl.img__img }
                src="/images/cases/pronin-team/stage-3.webp"
                alt="Варфреймы третьего этапа"
                width="475"
                height="555"

              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CasePage