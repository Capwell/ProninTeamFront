import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import stl from './CaseBanner.module.scss'

// use styled-components for set color settings for case item
const ColoredBanner = styled.div`
  background: linear-gradient(90deg, ${props => props.color}1a 0%, #ffffff 48.91%);

  & .banner__link {
    color: ${ props => props.color };
    border-color: ${ props => props.color };

    &:hover {
      color: white;
      background-color: ${ props => props.color };
      border-color: ${ props => props.color };
    }

    &:active {
      color: #333333 !important;
      border-color: #333333 !important;
      background-color: white;
    }
  }
`

function CaseBanner({
  as = 'div',
  className = '',
  caseColor = '#ffffff',
  logo,
  description,
  linkURL
}) {

  return(
    <ColoredBanner
      as={ as }
      className={ `${ stl.banner } ${ className }`}
      color={ caseColor }
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

        <Link
          className={ `btn btn-colored banner__link mx-auto mx-md-0 mt-auto mb-30 mb-xl-45 ms-md-auto` }
          href={ `/cases/${ linkURL }` }
        >
          Подробнее
        </Link>
      </Container>
    </ColoredBanner>
  )
}

export default CaseBanner