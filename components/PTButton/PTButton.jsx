import { Button } from 'react-bootstrap'
import Loader from '../Loader/Loader'

function PTButton({
  className,
  variant,         // react-bootstrap "variant" prop
  text,            // text on button
  onClick,         // onClick handler
  href,            // link for <Link> as button
  loader = false,  // boolean: is spinner element must be include
  isLoad = false,  // boolean: state for showing loader
  ...rest          // other params
}) {
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
    <Button
      className={ className }
      variant={ variant }
      onClick={ onClick }
      { ...rest }
    >
      { !isLoad && setIcon() }
      { !isLoad && text || setText() }
      { loader &&
        <Loader
          className={ `${ isLoad ? 'd-block' : 'd-none' }` }
          size="md"
        />
      }
    </Button>
  )
}

export default PTButton