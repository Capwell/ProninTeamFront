import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import PTHead from '../../../components/PTHead/PTHead'
import stl from './unity.module.scss'

function CasePage() {

  return (
    <>
      <PTHead
        title="ProninTeam - Кейс: Unity"
        description='Сюда надо будет написать какое-то описание для каждой отдельной страницы'
        ogType='website'
        ogUrl="https://proninteam.ru/cases/unity"
        ogImg='/images/pronin-team-og-img.webp'
        ogSiteName='ProninTeam'
      />
{/* Banner */}
      <div className={ `${ stl.banner } mt-lg-80 mb-60 mb-lg-100` }>
        <Container fluid="xxl">
          <div className={ `${ stl.banner__inner } py-40 p-lg-55` }>
            <div className={ `${ stl.banner__logo } mb-30 mb-lg-0 me-lg-55` }>
              <Image
                className={ stl.logo__img }
                src="/images/cases/unity/unity-logo.svg"
                alt="Unity Logo"
                fill
              />
            </div>

            <h1 className={ stl.banner__title }>
              <span>Unity</span>&nbsp;–&nbsp;это сервис для организаторов донорских мероприятий
            </h1>
          </div>
        </Container>
      </div>
{/* Description */}
      <Container
        as="section"
        fluid="xxl"
        className={ `${ stl.description } mb-40 mb-lg-55` }
      >
        <h2 className={ `${stl.description__title} mb-25` }>
          Unity
        </h2>

        <p className="mb-20">
          Сервис <b>Unity</b> развивается совместно некоммерческими организациями <strong>Российский Красный Крест</strong> и <strong>DonorSearch</strong>
        </p>
        <p className="mb-20">
          В рамках этого проекта был создан раздел для популяризации донорства и&nbsp;отслеживания импакта.
        </p>
        <p>
          Используемые технологии: <b>Python, Django Rest Framework, React, Next.JS, Redux</b>
        </p>
      </Container>
{/* To Do */}
      <Container
        as="section"
        fluid="xxl"
        className="mb-50 mb-lg-70"
      >
        <h2 className={ `${ stl.todo__title } mb-25 mb-lg-35` }>
          Что сделали:
        </h2>

        <ul className={ stl.todo__list }>
          <li className={ stl.todo__item }>
            <p className={ `${stl.item__text} mb-40 mb-lg-70` }>
              1. Прототипы страниц (Личный кабинет организации, редактирование организации,<br/>
              доноры организации, мероприятия организации, создание/редактирование мероприятий организаций, партнёры организации)
            </p>
            <div className={ stl.item__img }>
              <Image
                className={ stl.img__img }
                src="/images/cases/unity/stage-1.webp"
                alt="Прототипы страниц Unity"
                fill
                quality="85"
              />
            </div>
          </li>

          <li className={ stl.todo__item }>
            <p className={ `${stl.item__text} mb-40 mb-lg-70` }>
              2. По прототипам был сделан дизайн.
            </p>
            <div className={ stl.item__img }>
              <Image
                className={ stl.img__img }
                src="/images/cases/unity/stage-2.webp"
                alt="Дизайн страниц Unity"
                fill
                quality="85"
              />
            </div>
          </li>

          <li className={ stl.todo__item }>
            <p className={ `${stl.item__text} mb-40 mb-lg-60` }>
              3. Добавлена логика и доработан личный кабинет организации.
            </p>
            <Row className="d-flex justify-content-between">
              <Col md="6" className="mb-40 mb-md-0">
                <span className="d-block mb-15">Было</span>
                <div className={ stl.item__img }>
                  <Image
                    className={ stl.img__img }
                    src="/images/cases/unity/stage-3-before.webp"
                    alt="Личный кабинет организации: до"
                    fill
                    quality="85"
                  />
                </div>
              </Col>
              <Col md="1" className="position-relative">
                <svg className={ stl.arrow } width="101" height="16" viewBox="0 0 101 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0V9Z" fill="#333333"/>
                </svg>
              </Col>
              <Col md="5">
                <span className="d-block mb-5">Стало</span>
                <div className={ stl.item__img }>
                  <Image
                    className={ stl.img__img }
                    src="/images/cases/unity/stage-3-after.webp"
                    alt="Личный кабинет организации: после"
                    fill
                    quality="85"
                  />
                </div>
              </Col>
            </Row>
          </li>
        </ul>
      </Container>
{/* Result */}
      <Container
        as="section"
        fluid="xxl"
        className={ `${ stl.result } mb-50 mb-lg-75` }
      >
        <h2 className={ `${ stl.result__title } mb-30 mb-lg-30` }>
          Итог:
        </h2>

        <p className={ stl.result__text }>
          По итогам проекта количество организаций увеличилось...  а доноров ...
        </p>

      </Container>
    </>
  )
}

export default CasePage