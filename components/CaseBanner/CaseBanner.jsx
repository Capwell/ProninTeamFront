import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import PTButton from '../PTButton/PTButton'
import stl from './CaseBanner.module.scss'

// use styled-components for set color settings for case item
const ColoredBanner = styled.div`
  background: linear-gradient(90deg, ${props => props.bgColor}1a 0%, #ffffff 48.91%);
`

function CaseBanner({ as, className, caseColor, logo, description, linkURL }) {

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
        <div className={ `${ stl.banner__header } pt-45 pt-xl-0 mb-45 pb-xl-50` }>
          <div className={ stl.banner__logo }>
            <Image
              className={ stl.logo__img }
              src={ logo }
              loader={ () => logo }
              alt="Case image"
              fill
            />
          </div>
        </div>

        <p className={ `${ stl.banner__description } mb-20` }>
          { description }
        </p>

        <PTButton
          className="mx-auto mx-md-0 mt-auto mb-30 mb-xl-45 ms-md-auto"
          variant="colored"
          href={ `/cases/${linkURL}` }
          btnColor={ caseColor }
          text="Подробнее"
        />
      </Container>
    </ColoredBanner>
  )
}

export default CaseBanner