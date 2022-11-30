import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import PTHead from '../../components/PTHead/PTHead'
import PTButton from '../../components/PTButton/PTButton'
import stl from '../../styles/Cases.module.scss'
import CaseBanner from '../../components/CaseBanner/CaseBanner'

function Cases() {
  const router = useRouter()

  const casesData = [
    {
      logo: '/images/donorsearch-logo.svg',
      description: 'Безусловно, высококачественный прототип будущего проекта способствует подготовке и реализации модели развития.',
      color: '#FF2A23'
    },
    {
      logo: '/images/proninteam-logo.svg',
      description: 'Безусловно, высококачественный прототип будущего проекта способствует подготовке и реализации модели развития.',
      color: '#30D5C8'
    }
  ]

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
                caseColor={ caseItem.color }
                logo={ caseItem.logo }
                description={ caseItem.description }
              />
            )
          })
        }
      </ul>
    </>
  )
}

export default Cases