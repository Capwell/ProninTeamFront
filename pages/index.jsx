import { useState } from 'react'
import { useEffect } from 'react'
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
import api from '../utils/api'
import Image from 'next/image';

const mainCaseLocal = [{
  title: 'Unity',
  hex_color: '#FF2A23',
  logo: '/images/cases/unity-logo.webp',
  is_on_main_page: true,
  is_visible: true,
  slug: 'unity',
  text: 'Разработали раздел для популяризации донорства.'
}]

// function Home({ caseData }) {
function Home() {
  const [showVideo, setShowVideo] = useState(false)
  const [mainCaseData, getMainCaseData] = useState([])

  const getData = async () => {
    const data = await api.getMainCase()
    if (!data || !data.length) {
      return mainCaseLocal
    }
    return data
  }

  useEffect(async () => {
    getMainCaseData(await getData())
  }, [])

  // open modal window with video
  const openVideo = () => setShowVideo(true)

  return (
    <>
      <PTHead
        title="ProninTeam"
        description="Сюда надо будет написать какое-то описание для каждой отдельной страницы"
        ogType="website"
        ogImg="/images/pronin-team-og-img.webp"
        ogUrl="https://proninteam.ru"
        ogSiteName="ProninTeam"
      />

{/* Mission section */}
      <Container
        as="section"
        fluid="xxl"
        className={`${stl.mission} mt-50 mt-lg-100 mb-70 mb-lg-75`}
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
              <div
                className={ stl.video__thumbnail }
                onClick={ openVideo }
              >
                <Image
                  src="/images/video-preview.webp"
                  alt="Андрей Пронин"
                  fill
                />
              </div>
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
        <ClientForm targetPage="Home"/>
      </Container>

{/* Cases section */}
      <a id="cases" className="anchor" />

      <section className={ `${stl.cases} mb-125` }>
        <Container fluid="xxl">
          <h2 className={ `${stl.cases__title} mb-50` }>
            Пример наших работ
          </h2>
        </Container>

        {
          mainCaseData.length
            ? (<CaseBanner
                as='div'
                caseColor={ mainCaseData[0].hex_color || '#ffffff' }
                logo={ mainCaseData[0].logo }
                description={ mainCaseData[0].text }
                linkURL={ mainCaseData[0].slug }
              />)
            : null
        }

        <Container fluid="xxl" className="d-flex mt-30">
          <PTButton
            variant="small"
            className={ `${stl.cases__btn} ms-auto` }
            text="Посмотреть все кейсы"
            href="/cases"
          />
        </Container>
      </section>
    </>
  );
}

// export async function getServerSideProps(context) {
//   let caseData

//   try {
//     caseData = await api.getMainCase()
//   } catch (err) {
//     caseData = mainCaseLocal
//   } finally {
//     return { props: { caseData } }
//   }
// }

export default Home
