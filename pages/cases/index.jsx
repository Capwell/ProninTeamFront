import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
import PTHead from '../../components/PTHead/PTHead'
import PTButton from '../../components/PTButton/PTButton'
import CaseBanner from '../../components/CaseBanner/CaseBanner'
import Loader from '../../components/Loader/Loader'
import stl from '../../styles/Cases.module.scss'
import api from '../../utils/api'
import { casesDataLocal } from '../../public/mockData'

// function Cases({ casesData }) {
function Cases() {
  const router = useRouter()
  const [casesData, getCasesData] = useState([])
  const [isDataLoading, setIsDataLoading] = useState(true)
  // fetch data and set it to the state
  const getData = async () => {
    try {
      const data = await api.getCases()
      if (!data || !data.length) getCasesData(casesDataLocal)
      getCasesData(data)
    } catch (err) {
      getCasesData(casesDataLocal)
    } finally {
      setIsDataLoading(false)
    }
  }
  // fetch data only after the page is mounted (componentDidMount)
  useEffect(() => {
    getData()
  }, [])

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
          isDataLoading
          ? <Loader className="my-50 mx-auto" size="lg" />
          : casesData.map((caseItem, index) => {
              if (caseItem.logo && caseItem.text && caseItem.slug) {
                return (
                  <CaseBanner
                    as="li"
                    key={ `case-${index}` }
                    caseColor={ caseItem.hex_color || '#ffffff' }
                    logo={ caseItem.logo }
                    description={ caseItem.text }
                    linkURL={ caseItem.slug }
                  />
                )
              } else return null
            })
        }
      </ul>
    </>
  )
}

// export async function getServerSideProps(context) {
//   let casesData

//   try {
//     casesData = await api.getCases()
//   } catch (err) {
//     casesData = casesDataLocal
//   } finally {
//     return { props: { casesData } }
//   }
// }

export default Cases