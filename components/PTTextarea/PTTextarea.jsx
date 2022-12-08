import { Form } from 'react-bootstrap'

function PTTextarea({
  id,                      // HTML "id" attribute
  className = '',          // classes outside
  placeholder = '&nbsp;',  // bootstrap floating labels needs placeholder
  label,                   // text on input
  isError,                 // state for choose validation classes and show error's message
  ...rest                  // other parameters
}) {

  return (
    <Form.Floating
      className={ className + ' control--text ' + (
        isError.status !== undefined
        ? isError.status === true
          ? ' invalid' : ' valid'
        : ''
      )}
      data-testid={`${id}Wrapper`}
    >
      <Form.Control
        className="control__input"
        type="text"
        id={ id }
        data-testid={`${id}Input`}
        placeholder={ placeholder } // placeholders are necessary for bootstrap floating labels
        { ...rest }
      />

      <label className="control__label">{ label }</label>

      <span className="control__error" data-testid={`${id}Error`}>
        { isError.text || null }
      </span>
    </Form.Floating>
  )
}

export default PTInputText