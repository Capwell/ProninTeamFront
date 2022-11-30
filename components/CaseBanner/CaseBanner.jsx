import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import PTButton from '../PTButton/PTButton'
import stl from './CaseBanner.module.scss'

// use styled-components for set color settings for case item
const ColoredBanner = styled.div`
  background: linear-gradient(90deg, ${props => props.bgColor}1a 0%, #ffffff 48.91%);
`

function CaseBanner({ as, className, caseColor, logo, description }) {

  return(
    <ColoredBanner
      as={ as }
      className={ `${stl.banner} ${className}`}
      bgColor={ caseColor }
    >
      <Container
        fluid="xxl"
        className={ stl.banner__inner }
      >
        <div className={ stl.banner__logo }>
          <Image
            className={ stl.logo__img }
            src={ logo }
            alt="Case image"
            fill
          />
        </div>

        <p className={ stl.banner__description }>
          { description }
        </p>
{/* TODO: Реализовать ссылку через Next.js Link компонент */}
        <PTButton
          as="a"
          className="mt-auto ms-auto"
          variant="colored"
          href="/cases/case"
          btnColor={ caseColor }
          text="Подробнее"
        />
      </Container>
    </ColoredBanner>
  )
}

export default CaseBanner