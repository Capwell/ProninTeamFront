import FormControl from 'react-bootstrap/FormControl'

function PTTextarea({
  id,                      // HTML "id" attribute
  className = '',          // classes outside
  placeholder = '&nbsp;',  // bootstrap floating labels needs placeholder
  isError,                 // state for choose validation classes and show error's message
  ...rest                  // other parameters
}) {

  return (
    <div
      className={ 'control--textarea' + (
        isError.status !== undefined
        ? isError.status === true
          ? ' invalid' : ' valid'
        : ''
      ) + `${className || ''}`}
      data-testid={ `${ id }Wrapper` }
    >
      <span className="control__error" data-testid={ `${ id }Error` }>
        { isError.text || null }
      </span>

      <FormControl
        as="textarea"
        id={ id }
        className="control__input"
        data-testid={ `${ id }Textarea` }
        placeholder={ placeholder }
        { ...rest }
      />
    </div>
  )
}

export default PTTextarea