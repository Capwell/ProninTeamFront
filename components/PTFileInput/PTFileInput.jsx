import { Form } from 'react-bootstrap';
import { useRef, useState } from 'react';

function PTFileInput({ className, fileRef, fileChangeCallback, ...rest }) {
  const fileLabel = useRef()
  const fileRemove = useRef()
  const fileError = useRef()
  const [fileName, setFileName] = useState('')
  const [isRemoveDisabled, setIsRemoveDisabled] = useState(true)

  // check file presense and than get it's size and name
  const checkFile = e => {
    const fileData = e.target.files[0]

    if (fileData) {
      const size = fileData.size

      // check is file more than 10 MB
      if (size > 10 * 1024 * 1024) {
        fileError.current.innerText = 'Слишком большой файл'
        setTimeout(() => fileError.current.innerText = '', 2000)
        fileRef.current.value = ''

        return
      }

      const name = fileData.name
      setFileName(name)
      fileChangeCallback(fileData)
      fileRemove.current.classList.add('show')
      setIsRemoveDisabled(false)
    }
  }

  const removeFile = () => {
    fileRemove.current.classList.remove('show')
    fileRef.current.value = ''
    setFileName('')
    fileChangeCallback('')
    setIsRemoveDisabled(true)
  }

  return (
    <Form.Group className={ `${ className } control--file` }>
      <span
        className="control__error"
        data-testid="fileError"
        ref={ fileError }
      />

      <Form.Label className="control__label" htmlFor='file' data-testid="fileLabel">
        <div className="label__top">
          <span ref={ fileLabel }>
            { fileName || 'Прикрепить файл' }
          </span>
          <span>
            { fileName ? '' : '(не более 10 мб)' }
          </span>
        </div>
        <span>* необязательно</span>
      </Form.Label>

      <Form.Control
        ref={ fileRef }
        className="control__input"
        type='file'
        onChange={ checkFile }
        { ...rest }
        accept="image/*, .pdf, .doc, .docx, .txt, .ppt, .pptx, .xls, .xlsx, .rtf, .odt, .zip, .rar, .7z, .sit"
        data-testid="fileInput"
      />

      <button
        type="button"
        className="control__btn"
        ref={ fileRemove }
        onClick={ removeFile }
        disabled={ isRemoveDisabled }
        data-testid="fileRemove"
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.707107 14.8492C0.316582 14.4587 0.316582 13.8255 0.707107 13.435L13.435 0.707093C13.8256 0.316569 14.4587 0.316569 14.8492 0.707093C15.2398 1.09762 15.2398 1.73078 14.8492 2.12131L2.12132 14.8492C1.7308 15.2398 1.09763 15.2398 0.707107 14.8492Z" fill="#333333"/>
          <path d="M0.706956 0.707078C1.09748 0.316554 1.73064 0.316554 2.12117 0.707078L14.8491 13.435C15.2396 13.8255 15.2396 14.4587 14.8491 14.8492C14.4586 15.2397 13.8254 15.2397 13.4349 14.8492L0.706956 2.12129C0.316432 1.73077 0.316431 1.0976 0.706956 0.707078Z" fill="#333333"/>
        </svg>
      </button>
    </Form.Group>
  )
}

export default PTFileInput