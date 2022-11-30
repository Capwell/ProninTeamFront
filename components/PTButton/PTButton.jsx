import Link from 'next/link'
import { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import stl from './PTButton.module.scss'

// use styled-components for set color settings
// (if we get it dynamicly)
const ColoredBtn = styled(Button)`
  color: ${ props => props.btnColor };
  border-color: ${ props => props.btnColor };

  &:hover {
    color: white;
    background-color: ${ props => props.btnColor };
    border-color: ${ props => props.btnColor };
  }

  &:active {
    color: #333333 !important;
    border-color: #333333 !important;
  }
`

const ColoredLink = styled(Link)`
  color: ${ props => props.btnColor };
  border-color: ${ props => props.btnColor };

  &:hover {
    color: white;
    background-color: ${ props => props.btnColor };
    border-color: ${ props => props.btnColor };
  }

  &:active {
    color: #333333 !important;
    border-color: #333333 !important;
  }
`

function PTButton({
  className,
  variant,         // react-bootstrap "variant" prop
  text,            // text on button
  onClick,         // onClick handler
  btnColor,        // value for colored styled-component
  href,            // link for <Link> as button
  loader = false,  // boolean: is spinner element must be include
  isLoad = false,  // boolean: state for showing loader
  ...rest          // other params
}) {
  // state for showing spinner when something is loading
  // const [isLoading, setIsLoading] = useState(isLoad)
  // if btnColor is define - we have to add bootstrap classes of element manualy
  const classes = `${className || ''} ${btnColor ? 'btn btn-colored' : ''}`

  // set svg icon for some button's variants
  const setIcon = () => {
    if (variant === 'small-back') {
      return (
        <svg className="btn__icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.2002 29.6L15.2002 19.6L25.2002 9.6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }

    if (variant === 'small-up') {
      return (
        <svg className="btn__icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3999 25.2L20.3999 15.2L30.3999 25.2" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }

    return
  }
  // set text for some button's variants
  const setText = () => {
    if (variant === 'small-back') return 'Назад'
    if (variant === 'small-up') return 'Наверх'

    return
  }
  // return component depending on the values of the passed parameters
  const renderElem = () => {
    // if there is href value
    if (href) {
      // and if there is a color parameter -
      // return next.js <Link> wrapped on styled-component
      if (variant === 'colored') return (
        <ColoredLink
          className={ classes }
          btnColor={ btnColor }
          href={ href }
          { ...rest }
        >
          { setIcon() }
          { text || setText() }
        </ColoredLink>
      )
      // there is NOT a color parameter -
      // return next.js Link component
      else return (
        <Link
          className={ `${classes} btn btn-${variant}` }
          href={ href }
          { ...rest }
        >
          { setIcon() }
          { text || setText() }
        </Link>
      )
    // if there is NOT href value
    } else {
      // and if there is a color parameter -
      // return react-bootstrap <Button> wrapped on styled-component
      if (variant === 'colored') return (
        <ColoredBtn
          className={ classes }
          variant={ variant }
          onClick={ onClick }
          btnColor={ btnColor }
          { ...rest }
        >
          { setIcon() }
          { text || setText() }
        </ColoredBtn>
      )
      // there is NOT a color parameter -
      // else - return react-bootstrap <Button>
      else return (
        <Button
          className={ classes }
          variant={ variant }
          onClick={ onClick }
          { ...rest }
        >
          { !isLoad && setIcon() }
          { !isLoad && text || setText() }
          { loader &&
            <Spinner
              className={ `${stl.loader} ${
                isLoad ? 'd-block' : 'd-none'
              }` }
              as="span"
              animation="border"
              role="status"
              size="md"
              aria-hidden="true"
            >
              <span className="visually-hidden">Подождите...</span>
            </Spinner>
          }
        </Button>
      )
    }
  }

  return (
    renderElem()
  )
}

export default PTButton