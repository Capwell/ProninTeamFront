import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import PTHead from '../../components/PTHead/PTHead'
import PTButton from '../../components/PTButton/PTButton'
import stl from '../../styles/Cases.module.scss'
import CaseBanner from '../../components/CaseBanner/CaseBanner'
// import api from '../../utils/api'

// export async function getStaticProps() {
//   let casesData = []

//   try {
//     const allData = await api.getCases()
//     // filter only visible cases
//     casesData = allData.filter(caseData => caseData.is_visible === true)
//   } catch (err) {
//     console.log(err.message)
//   }

//   return { props: { casesData } }
// }

const casesData = [
  {
    title: 'DonorSearch',
    hex_color: '#FF2A23',
    logo: '/images/donorsearch-logo.svg',
    is_on_main_page: false,
    is_visible: true,
    slug: 'donor-search',
    text: 'Закрываем основные IT-потребности заказчика, накопившиеся за 12-ти летнюю историю проекта.'
  },
  {
    title: 'Unity',
    hex_color: '#FF2A23',
    logo: '/images/unity-logo.svg',
    is_on_main_page: false,
    is_visible: true,
    slug: 'unity',
    text: 'Разработали раздел для популяризации донорства.'
  },
  {
    title: 'ProninTeam',
    hex_color: '#30D5C8',
    logo: '/images/proninteam-logo.svg',
    is_on_main_page: true,
    is_visible: true,
    slug: 'pronin-team',
    text: 'Разработали сайт компании ProninTeam с нуля за 4 недели.',
  }
]


// function Cases({ casesData = [] }) {
// function Cases({ casesData }) {
function Cases() {
  const router = useRouter()

  return (
    <>
{/* TODO: доделать голову */}
      <PTHead
        title="ProninTeam - Кейсы"
      />

      <Container
        as="section"
        fluid="xxl"
        className="mt-30 mb-20"
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

      <ul className={ `${stl.cases__list} mb-100` }>
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

export default Cases