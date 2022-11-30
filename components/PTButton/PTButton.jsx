import { Button } from 'react-bootstrap'
import styled from 'styled-components'

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

function PTButton({ className, variant, text, onClick, btnColor, ...rest }) {
  // if btnColor is define - we have to add bootstrap classes of element manualy
  const classes = `${className} ${btnColor ? 'btn btn-colored' : ''}`

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
  return (
    // if variant prop is "colored" - return styled component
    variant === 'colored'
      ? <ColoredBtn
          className={ classes }
          variant={ variant }
          onClick={ onClick }
          btnColor={ btnColor }
          { ...rest }
        >
          { setIcon() }
          { text || setText() }
        </ColoredBtn>
      // else - return bootstrap Button component
      : <Button
          className={ classes }
          variant={ variant }
          onClick={ onClick }
          { ...rest }
        >
          { setIcon() }
          { text || setText() }
        </Button>
  )
}

export default PTButton