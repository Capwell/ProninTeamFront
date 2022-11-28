import { useState } from "react";
import {
  Row,
  Col,
  Button
} from "react-bootstrap";
import PTHead from "../components/PTHead/PTHead"
import ClientForm from '../components/ClientForm/ClientForm'
import stl from "../styles/Home.module.scss"

function Home() {

  return (
    <>
      <PTHead
        title='ProninTeam'
        description='Сюда надо будет написать какое-то описание для каждой отдельной страницы'
        ogType='website'
        ogImg='/images/pronin-team-og-img.webp'
        ogSiteName='ProninTeam'
      />

{/* Mission section */}
      <section className={ stl.mission + ' mt-50 mt-lg-100 mb-70 mb-lg-80'}>
        <h1 className={ stl.mission__title }>
          Наша миссия
        </h1>
        <p className={ stl.mission__text }>
          Помочь вам создать программный продукт для развития бизнеса.<br />
          Гибко и быстро с возможностью вашего контроля каждого этапа разработки.
        </p>
      </section>

{/* About section */}
      <a id="about" className="anchor" />

      <Row as='section' className={ stl.about + ' mb-100 mb-lg-140' }>
        <Col lg='7' className={ stl.about__text }>
          <section className={ stl.about__how }>
            <h3 className={ stl.how__title }>
              Как мы это делаем:
            </h3>
            <p className={ stl.how__text }>
              Обсуждаем <span>приоритеты</span> и делим работу на недельные отрезки.
            </p>
            <p className={ stl.how__text }>
              В понедельник рассказываем, что будем делать — в пятницу вы видите живой результат.
            </p>
          </section>

          <section className={ stl.about__why }>
            <h3 className={ stl.why__title }>
              Зачем оно вам?
            </h3>
            <p className={ stl.why__text }>
              <span>Скорость запуска</span> — первая версия проекта может выйти уже через неделю.
            </p>
            <p className={ stl.why__text }>
              <span>Гибкость.</span> Возможность менять требования на ходу. Прозрачность и полный контроль.
            </p>
          </section>
        </Col>

        <Col
          lg='auto'
          className='
            d-flex
            justify-content-center
            mt-6 mt-lg-0
          '
        >
          <div className={ stl.about__video }>
{/* TODO: add bootstrap ratio component */}
            <div className={ stl.video__thumbnail } />
            <span className={ stl.video__title }>За минуту просто и ясно о том, как пойдёт работа</span>
            <span className={ stl.video__author }>Андрей Пронин СЕО</span>

            <Button className='btn btn--secondary' href="#">
              Смотреть видео
            </Button>
          </div>
        </Col>
      </Row>

{/* Brief section */}
      <a id="brief" className="anchor" />

      <section className={ stl.brief + ' mb-100 mb-lg-140'}>
        <h2 className={ stl.brief__title }>
          Хотите заказать проект?
        </h2>

        <p className={ stl.brief__text }>
          Позвоните <a
            className={ stl.text__link }
            href='tel:+79272703006'>
              +7 927 270-30-06
          </a>,
          напишите в
          telegram: <a
            className={ stl.text__link }
            href='https://t.me/andpronin'
            target='_blank'
            rel="noreferrer">
              @andpronin
          </a> или заполните форму:
        </p>

        <ClientForm />
      </section>

{/* Cases section */}
      <a id="cases" className="anchor" />

      <section className={ stl.cases + ' mb-100 mb-lg-150'}>

        <h2 className={ stl.cases__title }>
          Кейсы
        </h2>

        <div className={ stl.cases__timeline }>
          <ul className={ stl.timeline__list }>

            <li className={ stl.timeline__item }>
              <div className={ stl.item__title }>
                <span>Спринт 1. (9 - 14 ноября)</span>
              </div>

              <div className={ stl.item__text }>
                Провели подготовительную работу:
                <br/><br/>
                <ul>
                  <li>Провели переговоры с заказчиком, подготовили фич-лист;</li>
                  <li>Нарисовали и согласовали варфреймы;</li>
                  <li>Купили домен. Настроили домен (SSL, NS зоны);</li>
                  <li>Создали Джангo проект с расширенной базовой моделью пользователя.</li>
                </ul>
              </div>
            </li>

            <li className={ stl.timeline__item }>
              <div className={ stl.item__title }>
                <span>Спринт 2. (14 - 21 ноября)</span>
              </div>

              <div className={ stl.item__text }>
                Подготовили MVP сайта
                <br/><br/>
                <ul>
                  <li>Нарисовали дизайн по варфреймам;</li>
                  <li>Подготовили и реализовали форму заявки клиента;</li>
                  <li>Настроили CI CD;</li>
                  <li>
                    Подготовили текст юридических документов:<br/>
                    - Согласие на обработку персональных данных;<br/>
                    - Политику обработки персональных данных;
                  </li>
                  <li>Настроили капчу;</li>
                  <li>Подготовили контент для MVP;</li>
                  <li>
                    <b>17 ноября</b> — проанализировали полученные материалы и приняли решение сделать лендинг в качестве MVP;
                  </li>
                  <li>Переделали варфреймы и дизайн.</li>
                </ul>
              </div>
            </li>

          </ul>
        </div>
      </section>

    </>
  );
}

export default Home
