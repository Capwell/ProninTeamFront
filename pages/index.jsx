import { useState } from 'react';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';
import PTHead from '../components/PTHead/PTHead'
import VideoModal from '../components/VideoModal/VideoModal'
import ClientForm from '../components/ClientForm/ClientForm'
import stl from '../styles/Home.module.scss'
import PTButton from '../components/PTButton/PTButton'
import CaseBanner from '../components/CaseBanner/CaseBanner'

export async function getServerSideProps() {
  let caseData = []

  try {
    caseData = await api.getMainCase()
  } catch (err) {
    console.log(err.message)
  }

  return { props: { caseData } }
}

function Home({ caseData = [] }) {
  const [showVideo, setShowVideo] = useState(false)
  // open modal window with video
  const openVideo = () => setShowVideo(true)

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
      <Container
        as="section"
        fluid="xxl"
        className={`${stl.mission} mt-50 mt-lg-100 mb-70 mb-lg-80`}
      >
        <h1 className={ stl.mission__title }>
          Наша миссия
        </h1>
        <p className={ stl.mission__text }>
          Помочь вам создать программный продукт для развития бизнеса.<br />
          Гибко и быстро с возможностью вашего контроля каждого этапа разработки.
        </p>
      </Container>

{/* About section */}
      <a id="about" className="anchor" />

      <Container
        as='section'
        fluid="xxl"
        className={`${stl.about} mb-100 mb-lg-140`}
      >
        <Row className="justify-content-between">
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
              mt-30 mt-lg-0
            '
          >
            <VideoModal
              show={ showVideo }
              setShow={ setShowVideo }
            />
            <div className={ stl.about__video }>
              <a
                className={ stl.video__thumbnail }
                onClick={ openVideo }
              />
              <span className={ stl.video__title }>За минуту просто и ясно о том, как пойдёт работа</span>
              <span className={ stl.video__author }>Андрей Пронин СЕО</span>

              <PTButton
                variant="secondary"
                text="Смотреть видео"
                onClick={ openVideo }
              />
            </div>
          </Col>
        </Row>
      </Container>
{/* Brief section */}
      <a id="brief" className="anchor" />

      <Container
        as='section'
        fluid="xxl"
        className={`${stl.brief} mb-100 mb-lg-140`}
      >
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
      </Container>

{/* Cases section */}
      <a id="cases" className="anchor" />

      <section className={ stl.cases }>
        <Container fluid="xxl">
          <h2 className={ stl.cases__title }>
            Пример наших работ
          </h2>
        </Container>

        {
          caseData.length
            ? (<CaseBanner
                as='div'
                caseColor={ caseData.hex_color }
                logo={ caseData.logo }
                description={ caseData.text }
                linkURL={ caseData.slug }
              />)
            : null
        }

        <Container fluid="xxl" className="d-flex justify-content-center">
          <PTButton
            variant="primary"
            className="mt-20"
            text="Посмотреть все кейсы"
            href="/cases"
          />
        </Container>
      </section>

        {/* <div className={ stl.cases__timeline }>
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

            <li className={ stl.timeline__item }>
              <div className={ stl.item__title }>
                <span>Спринт 3. (21 - 28 ноября)</span>
              </div>

              <div className={ stl.item__text }>
                <ul>
                  <li>Нарисовали Ui kit;</li>
                  <li>Сделали варфрейм и дизайн страницы Команда;</li>
                  <li>Сделали страницу Команда;</li>
                  <li>Настроили CI/CD;</li>
                  <li>Допилили раздел правовые документы;</li>
                  <li>
                    Доработали форму заявки:<br/>
                    - Cохранение согласия пользователя,<br/>
                    - Валидация полей формы,<br/>
                    - Прикрепление файла к заявке,<br/>
                    - Настроили helptext;<br/>
                  </li>
                  <li>Написали тесты на логику работы формы и энд поинт;</li>
                  <li>Настроили адаптивку для мобильной версии;</li>
                  <li>Настроили CORS.</li>
                </ul>
              </div>
            </li>

          </ul>
        </div> */}

    </>
  );
}

export default Home
