import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import PTHead from '../../components/PTHead/PTHead'
import PTButton from '../../components/PTButton/PTButton'
import stl from '../../styles/Cases.module.scss'

// use styled-components for set color settings for case item
const ColoredItem = styled.li`
  background: linear-gradient(90deg, ${props => props.itemColor}1a 0%, #ffffff 48.91%);
`

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
              <ColoredItem
                key={ `case-${index}` }
                className={ stl.list__item }
                itemColor={ caseItem.color }
              >
                <Container
                  fluid="xxl"
                  className={`${stl.item__inner} pt-115 pb-45`}
                >
                  <div className={ stl.item__logo }>
                    <Image
                      className={ stl.logo__img }
                      src={ caseItem.logo }
                      alt="Case image"
                      fill
                    />
                  </div>

                  <p className={ stl.item__description }>{ caseItem.description }</p>
{/* TODO: Реализовать ссылку через Next.js Link компонент */}
                  <PTButton
                    as='a'
                    className="mt-auto ms-auto"
                    variant="colored"
                    href="/cases/case"
                    btnColor={ caseItem.color }
                    text="Подробнее"
                  />
                </Container>
              </ColoredItem>
            )
          })
        }
      </ul>
    </>
  )
}

export default Cases