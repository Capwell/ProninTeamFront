import PTHead from '../../components/PTHead/PTHead'
import { useRouter } from 'next/router'
import stl from '../../styles/Cases.module.scss'
import styled from 'styled-components'
import PTButton from '../../components/PTButton/PTButton'
import Image from 'next/image'

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
        title='ProninTeam - Кейсы'
      />

{/* Back button */}
      <PTButton
        className="my-40"
        variant='small-back'
        onClick={ () => router.back() }
      />

      <h1 className={ `${stl.cases__title} mb-100` }>
        Кейсы
      </h1>

      <ul className={ `${stl.cases__list} mb-100` }>
        {
          casesData.map((caseItem, index) => {
            return (
              <li
                key={ `case-${index}` }
                className={ `${stl.list__item} pt-115 pb-45` }
              >
                <div className={ stl.item__logo }>
                  <Image
                    className={ stl.logo__img }
                    src={ caseItem.logo }
                    alt='Case image'
                    fill
                  />
                </div>

                <p className={ stl.item__description }>{ caseItem.description }</p>

                <PTButton
                  variant="colored"
                  className="mt-auto ms-auto"
                  text="Подробнее"
                  as='a'
                  href='/cases/case'
                  btnColor={ caseItem.color }
                />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Cases