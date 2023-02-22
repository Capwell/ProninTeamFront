import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import PTHead from '../../../components/PTHead/PTHead'
import stl from './mkul.module.scss'
import XAutoScroll from '../../../components/XAutoScroll/XAutoScroll'
import PTContainer from '../../../components/PTContainer/PTContainer'
import PTImage from '../../../components/PTImage/PTImage'
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs'

const timeline = [
  'Анализ\nконкурентов',
  'Дизайн',
  'Разработка',
  'Размещение на сервере и поддержка'
]

const team = [
  {
    role: 'Дизайнер',
    name: 'Олег Кипарисов'
  },
  {
    role: 'Бэкенд',
    name: 'Александр Кондратьёв'
  },
  {
    role: 'Фронтенд',
    name: 'Егор Романов'
  },
  {
    role: 'Тестирование',
    name: 'Элина Нурматова'
  },
  {
    role: 'Забота о клиенте',
    name: 'Каролина Павлычева, Нина Попова'
  }
]

function CasePage() {
  // const scrollImages = useRef(null)

  useEffect(() => {
    // console.log(scrollImages.current)
    const viewer = new Viewer(document.querySelector(`.${ stl.horizontal }`), {
      button: false,
      navbar: 2,
      title: false,
      toolbar: {
        prev: 1,
        next: 1,
        zoomIn: 0,
        oneToOne: 0,
        zoomOut: 0,
        play: 0,
        reset: 0,
        rotateLeft: 0,
        rotateRight: 0,
        flipHorizontal: 0,
        flipVertical: 0,
      },
      inline: false,
      inheritedAttributes: [],
      movable: false,
      rotatable: false,
      // zoomable: false,
      // zoomOnTouch: false,
      // zoomOnWheel: false,
      toggleOnDblclick: false,
      tooltip: false,
      transition: false,
      zIndex: 9999,
    })
  }, [])

  return (
    <>
      <PTHead
        title="Макаровская кузница - Кейс ProninTeam"
      />

      <PTContainer className={ stl.header } as="section">
        <section className={ stl.header__inner }>
          <h1 className={ stl.header__title }>
            Макаровская кузница
          </h1>

          <p className={ stl.header__description }>
            Макаровская кузница занимается производством кованных изделий на заказ. От сувениров и мебели до крупного формата: ворот, заборов, лестниц. Команда для Макаровской кузницы сделала сайт с возможностью заказа через интернет. Для быстроты обработки заказов они дублируются в телеграм.
          </p>

          <p className={ stl.header__stack }>
            <b>Технологии:</b> Django, Jinja2, Telegram Bot API.
          </p>
        </section>
      </PTContainer>

      <PTContainer as="section" className={ stl.pagespeed }>
        <p className={ stl.pagespeed__text }>
          Для дружбы с поисковыми системами обратили особое внимание на perfomance и рекомендации.
        </p>

        <PTImage
          className={ stl.pagespeed__img }
          // src="/images/cases/mkul/perfomance.webp"
          srcSet="/images/cases/mkul/perfomance-w345.webp 345w,
                  /images/cases/mkul/perfomance-w535.webp 535w,
                  /images/cases/mkul/perfomance-w727.webp 727w,
                  /images/cases/mkul/perfomance.webp 1110w"
          sizes="(max-width: 375px) 345px,
                 (max-width: 575px) 535px,
                 (max-width: 767px) 727px,
                 1110px"
          alt="Результаты PageSpeed сайта mkul.ru"
        />
      </PTContainer>

      <PTContainer as="section" className={ stl.mobileView }>
        <Row>
          <Col className={ stl.mobileView__imgWrapper } md>
            <PTImage
              className={ stl.mobileView__img }
              srcSet="/images/cases/mkul//mobile-view-1-w345.webp 345w,
                      /images/cases/mkul//mobile-view-1-w390.webp 390w,
                      /images/cases/mkul/mobile-view-1.webp 540w"
              sizes="(max-width: 375px) 345px,
                     (max-width: 575px) 390px,
                     540px"
              alt="Результаты PageSpeed сайта mkul.ru"
            />
          </Col>

          <Col className={ stl.mobileView__imgWrapper } md>
            <PTImage
              className={ stl.mobileView__img }
              srcSet="/images/cases/mkul//mobile-view-2-w345.webp 345w,
                      /images/cases/mkul//mobile-view-2-w390.webp 390w,
                      /images/cases/mkul/mobile-view-2.webp 540w"
              sizes="(max-width: 375px) 345px,
                     (max-width: 575px) 390px,
                     540px"
              alt="Результаты PageSpeed сайта mkul.ru"
            />
          </Col>
        </Row>
      </PTContainer>

      <XAutoScroll
        className={ stl.horizontal }
        wrapperClass={ stl.horizontal__wrapper }
        startScroll="5%"
        endScroll="85%"
      >
        <PTImage
          className={ stl.horizontal__img }
          src="/images/cases/mkul/mkul-404.webp"
          srcSet="/images/cases/mkul//mkul-404-w480.webp 480w,
                  /images/cases/mkul//mkul-404-w613.webp 613w,
                  /images/cases/mkul/mkul-404.webp 994w"
          sizes="(max-width: 375px) 480px,
                 (max-width: 767px) 613px,
                  994px"
          alt="Страница 404 mkul.ru"
        />

        <PTImage
          className={ stl.horizontal__img }
          src="/images/cases/mkul/mkul-homepage-1.webp"
          srcSet="/images/cases/mkul//mkul-homepage-1-w480.webp 480w,
                  /images/cases/mkul//mkul-homepage-1-w613.webp 613w,
                  /images/cases/mkul/mkul-homepage-1.webp 994w"
          sizes="(max-width: 375px) 480px,
                 (max-width: 767px) 613px,
                  994px"
          alt="Верхняя часть главной страницы mkul.ru"
        />

        <PTImage
          className={ stl.horizontal__img }
          src="/images/cases/mkul/mkul-homepage-2.webp"
          srcSet="/images/cases/mkul//mkul-homepage-2-w480.webp 480w,
                  /images/cases/mkul//mkul-homepage-2-w613.webp 613w,
                  /images/cases/mkul/mkul-homepage-2.webp 994w"
          sizes="(max-width: 375px) 480px,
                 (max-width: 767px) 613px,
                  994px"
          alt="Нижняя часть главной страницы mkul.ru"
        />
      </XAutoScroll>

      <PTContainer as="section" className={ stl.summary }>
        <h2 className={ stl.summary__title }>
          О проекте
        </h2>

        <div className={ stl.summary__dates }>
          <div className={ stl.dates__group }>
            <span className={ stl.dates__label }>Старт проекта</span>
            <span className={ stl.dates__value }>16 дек 2022</span>
          </div>

          <div className={ stl.dates__group }>
            <span className={ stl.dates__label }>Пуск по плану</span>
            <span className={ stl.dates__value }>01 фев 2023</span>
          </div>

          <div className={ stl.dates__group }>
            <span className={ stl.dates__label }>Фактически</span>
            <span className={ stl.dates__value }>13 фев 2023</span>
          </div>
        </div>

        <div className={ stl.summary__timeline }>
          <span className={ stl.timeline__total }>6 недель</span>
          {
            timeline.map((item, i) => {
              return (
                <div key={ `item-${i}` } className={ stl.timeline__item }>{ item }</div>
              )
            })
          }
        </div>

        <div className={ stl.summary__team }>
          <span className={ stl.team__title }>В ролях:</span>

          <ul className={ stl.team__list }>
            {
              team.map((member, i) => {
                return (
                  <li key={ `member-${i}` } className={ stl.team__member }>
                    <span className={ stl.member__role }>{ member.role }</span>
                    <span className={ stl.member__name }>{ member.name }</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </PTContainer>

      <PTContainer className={ stl.btnWrapper }>
        <Link
          className={ `btn btn-primary ${ stl.btn }` }
          href="/#brief"
        >
          Стать клиентом
        </Link>
      </PTContainer>
    </>
  )
}

export default CasePage