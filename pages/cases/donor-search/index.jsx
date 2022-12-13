import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import PTHead from '../../../components/PTHead/PTHead'
import TeamMember from '../../../components/TeamMember/TeamMember'
import PTBreadcrumb from '../../../components/PTBreadcrumb/PTBreadcrumb'
import stl from './donor-search.module.scss'

function CasePage() {

  return (
    <>
      <PTHead
        title="ProninTeam - Кейс: DonorSearch"
        description='Сюда надо будет написать какое-то описание для каждой отдельной страницы'
        ogType='website'
        ogUrl="https://proninteam.ru/cases/donor-search"
        ogImg='/images/pronin-team-og-img.webp'
        ogSiteName='ProninTeam'
      />

      <PTBreadcrumb />
{/* Banner */}
      <div className={ `${ stl.banner } mt-lg-80 mb-60 mb-lg-100` }>
        <Container fluid="xxl">
          <div className={ `${ stl.banner__inner } py-55` }>
            <div className={ stl.banner__logo }>
              <Image
                className={ stl.logo__img }
                src="/images/cases/donor-search/donor-search-logo.webp"
                alt="DonorSearch Logo"
                fill
              />
            </div>
          </div>
        </Container>
      </div>
{/* Description */}
      <Container
        as="section"
        fluid="xxl"
        className={ `${ stl.description } mb-40` }
      >
        <h2 className={ `${stl.description__title} mb-25` }>
          Крупнейшее сообщество доноров
        </h2>

        <p>
          Мы работаем с DonorSearch на принципах <b>постоянного потока задач.</b><br/>
          В рамках сотрудничества закрываем основные боли заказчика, накопившиеся<br/>
          за 12-ти&nbsp;летнюю историю проекта.
        </p>
      </Container>
{/* Letter */}
      <Container
        as="section"
        fluid="xxl"
        className="mb-200 mb-lg-400"
      >
        <Row>
          <Col sm="12" md="8" lg="9">
            <div className={ `${ stl.letter }` }>
              <div className={ `${ stl.letter__img }` }>
                <Image
                  className={ stl.img__img }
                  src="/images/cases/donor-search/donor-search-thank-you-letter.webp"
                  alt="Благодарственное письмо"
                  fill
                />
              </div>
            </div>
          </Col>
          <Col
            sm={{ span: 12, order: 'first' }}
            md={{ span: 4, order: 'last' }}
            lg="3"
            className="d-flex justify-content-center align-items-end mb-40 mb-md-0"
          >
            <TeamMember
              photo="/images/cases/donor-search/ruslan-shekurov.webp"
              name="Руслан Шекуров"
              mainRole="СЕО DonorSearch"
            />
          </Col>
        </Row>
      </Container>
    </>


  )
}

export default CasePage