import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import PTHead from '../../../components/PTHead/PTHead'
import PTButton from '../../../components/PTButton/PTButton'
import stl from './mkul.module.scss'
import horizontalAutoScroll from '../../../utils/horizontal-auto-scroll'

function CasePage() {
  // !!! TODO: добавить прелоадер
  const scrollX = useRef(null)

  useEffect(() => { horizontalAutoScroll(scrollX.current, '70%', '20%') }, [])

  return (
    <>
      <PTHead
        title="Макаровская кузница - Кейс ProninTeam"
      />

      <Container fluid="xxl">
        <section className={ stl.case__header }>
          <h1 className={ stl.header__title }>
            Макаровская кузница
          </h1>

          <p className={ stl.header__description }>
            Макаровская кузница занимается производством кованных изделий на заказ. От сувениров и мебели до крупного формата: ворот, заборов, лестниц. Команда для Макаровской кузницы сделала сайт с возможностью заказа через интернет. Для быстроты обработки заказов они дублируются в телеграм.
          </p>

          <p className={ stl.header__stack }>
            <strong>Технологии:</strong> Django, Jinja2, Telegram Bot API.
          </p>
        </section>
      </Container>

      <Container
        as="section"
        fluid="xxl"
        className={ stl.case__pagespeed }
      >
        <p className={ stl.pagespeed__text }>
          Для дружбы с поисковыми системами обратили особое внимание на perfomance и рекомендации.
        </p>

        <div className={ stl.pagespeed__img }>
          <Image
            className={ stl.img__img }
            src="/images/cases/mkul/perfomance.webp"
            alt="Результаты PageSpeed сайта mkul.ru"
            fill
          />
        </div>
      </Container>

      <Container
        as="section"
        fluid="xxl"
        className={ stl.case__mobileView }
      >
        <Row>
          <Col md className={ stl.mobileView__img }>
            <Image
              className={ stl.img__img }
              src="/images/cases/mkul/mobile-view-1.webp"
              alt="Результаты PageSpeed сайта mkul.ru"
              fill
            />
          </Col>

          <Col md className={ stl.mobileView__img }>
            <Image
              className={ stl.img__img }
              src="/images/cases/mkul/mobile-view-2.webp"
              alt="Результаты PageSpeed сайта mkul.ru"
              fill
            />
          </Col>
        </Row>
      </Container>

      <div className={ stl.case__horizontal } ref={ scrollX }>
        <div className={ stl.horizontal__wrapper } data-scroll-x>
          <div md className={ stl.horizontal__img }>
            <Image
              className={ stl.img__img }
              src="/images/cases/mkul/mkul-404.webp"
              alt="Страница 404 mkul.ru"
              fill
            />
          </div>

          <div md className={ stl.horizontal__img }>
            <Image
              className={ stl.img__img }
              src="/images/cases/mkul/mkul-homepage-1.webp"
              alt="Верхняя часть главной страницы mkul.ru"
              fill
            />
          </div>

          <div md className={ stl.horizontal__img }>
            <Image
              className={ stl.img__img }
              src="/images/cases/mkul/mkul-homepage-2.webp"
              alt="Нижняя часть главной страницы mkul.ru"
              fill
            />
          </div>
        </div>
      </div>

      <Container
        as="section"
        fluid="xxl"
        className={ stl.case__about }
      >
        <h2 className={ stl.about__title }>
          О проекте
        </h2>

        <div className={ stl.about__dates }>
          <div className={ stl.dates__group }>
            <span className={ stl.dates__label }>Старт проекта</span>
            <span className={ stl.dates__value }>16 дек 2022 —</span>
          </div>

          <div className={ stl.dates__group }>
            <span className={ stl.dates__label }>Пуск по плану</span>
            <span className={ stl.dates__value }>01 фев,</span>
          </div>

          <div className={ stl.dates__group }>
            <span className={ stl.dates__label }>Фактически</span>
            <span className={ stl.dates__value }>13 февраля 2023</span>
          </div>
        </div>

        <div className={ stl.about__timeline }>
          <span className={ stl.timeline__summary }>6 недель</span>
          <div className={ stl.timeline__item }>Анализ<br/>конкурентов</div>
          <div className={ stl.timeline__item }>Дизайн</div>
          <div className={ stl.timeline__item }>Разработка</div>
          <div className={ stl.timeline__item }>Размещение на сервере и поддержка</div>
        </div>

        <div className={ stl.about__team }>
          <span className={ stl.team__title }>В ролях:</span>

          <ul className={ stl.team__list }>
            <li className={ stl.team__member }>
              <span className={ stl.member__role }>Дизайнер</span>
              <span className={ stl.member__name }>Олег Кипарисов</span>
            </li>
            <li className={ stl.team__member }>
              <span className={ stl.member__role }>Бэкенд</span>
              <span className={ stl.member__name }>Александр Кондратьёв</span>
            </li>
            <li className={ stl.team__member }>
              <span className={ stl.member__role }>Фронтенд</span>
              <span className={ stl.member__name }>Егор Романов</span>
            </li>
            <li className={ stl.team__member }>
              <span className={ stl.member__role }>Тестирование</span>
              <span className={ stl.member__name }>Элина Нурматова</span>
            </li>
            <li className={ stl.team__member }>
              <span className={ stl.member__role }>Забота о клиенте</span>
              <span className={ stl.member__name }>Каролина Павлычева, Нина Попова</span>
            </li>
          </ul>
        </div>
      </Container>
    </>
  )
}

export default CasePage