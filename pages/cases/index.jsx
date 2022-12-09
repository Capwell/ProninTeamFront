import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import PTHead from '../../components/PTHead/PTHead'
import PTButton from '../../components/PTButton/PTButton'
import stl from '../../styles/Cases.module.scss'
import CaseBanner from '../../components/CaseBanner/CaseBanner'
import api from '../../utils/api'

const casesDataLocal = [
  {
    title: 'DonorSearch',
    hex_color: '#FF2A23',
    logo: '/images/cases/donor-search-logo.webp',
    is_on_main_page: false,
    is_visible: true,
    slug: 'donor-search',
    text: 'Закрываем основные IT-потребности заказчика, накопившиеся за 12-ти летнюю историю проекта.'
  },
  {
    title: 'Unity',
    hex_color: '#FF2A23',
    logo: '/images/cases/unity-logo.webp',
    is_on_main_page: false,
    is_visible: true,
    slug: 'unity',
    text: 'Разработали раздел для популяризации донорства.'
  },
  {
    title: 'ProninTeam',
    hex_color: '#30D5C8',
    logo: '/images/cases/pronin-team-logo.webp',
    is_on_main_page: true,
    is_visible: true,
    slug: 'pronin-team',
    text: 'Разработали сайт компании ProninTeam с нуля за 4 недели',
  }
]

function Cases({ casesData }) {
  const router = useRouter()

  return (
    <>
{/* TODO: доделать голову */}
      <PTHead
        title="ProninTeam - Кейсы"
        description='Можно посмотреть примеры услуг, оказанных компанией на примере реальных кейсов. Закрываем накопившиеся IT-потребности заказчика. Разработали раздел сайта. Разработали сайт компании с нуля за 4 недели'
        ogType='website'
        ogUrl="https://proninteam.ru/cases"
        ogImg='/images/pronin-team-og-img.webp'
        ogSiteName='Результат услуг ProninTeam на примере реальных кейсов'
      />

      <Container
        as="section"
        fluid="xxl"
        className="mt-30"
      >
{/* Back button */}
        <PTButton
          className="mb-30"
          variant="small-back"
          onClick={ () => router.back() }
        />

        <h1 className={ `${stl.cases__title} mb-100` }>
          Кейсы
        </h1>
      </Container>

      <ul className={ `${stl.cases__list} mb-100 mb-lg-200` }>
        {
          casesData.map((caseItem, index) => {
            return (
              <CaseBanner
                as="li"
                key={ `case-${index}` }
                caseColor={ caseItem.hex_color }
                logo={ caseItem.logo }
                description={ caseItem.text }
                linkURL={ caseItem.slug }
              />
            )
          })
        }
      </ul>
    </>
  )
}

export async function getServerSideProps(context) {
  let casesData

  try {
    casesData = await api.getCases()
  } catch (err) {
    casesData = casesDataLocal
  } finally {
    return { props: { casesData } }
  }
}

export default Cases