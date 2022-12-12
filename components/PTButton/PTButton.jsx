import { Button } from 'react-bootstrap'
import Loader from '../Loader/Loader'
import BtnBackIcon from '../SVG/BtnBackIcon'
import BtnUpIcon from '../SVG/BtnUpIcon'

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

  return (
    <Button
      className={ className }
      variant={ variant }
      onClick={ onClick }
      { ...rest }
    >
      { !isLoad && (
          (variant === 'small-back' &&
          <>
            <BtnBackIcon className="btn__icon" />
            Назад
          </>)
          ||
          (variant === 'small-up' &&
          <>
            <BtnUpIcon className="btn__icon" />
            Наверх
          </>)
          || text
      ) }

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