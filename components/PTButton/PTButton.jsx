import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const ColoredBtn = styled(Button)`
  color: ${(props) => props.color};
  border-color: ${(props) => props.color};

  &:hover {
    color: white;
    background-color: ${(props) => props.color};
    border-color: ${(props) => props.color};
  }
  // TODO: добавить стили для нажатия
`

function PTButton({ className, variant, text, onClick, color, ...rest }) {
// TODO: написать описание styled-components
  const classes = `${className} ${color ? 'btn btn-primary' : ''}`

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
    <ColoredBtn
      className={ classes }
      variant={ variant }
      onClick={ onClick }
      color={ color }
      { ...rest }
    >
      { setIcon() }
      { text || setText() }
    </ColoredBtn>
  )
}

export default PTButton