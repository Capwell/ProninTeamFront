import { Form } from 'react-bootstrap';
import { useRef, useState } from 'react';
import BtnCloseIcon from '../SVG/BtnCloseIcon';

function PTInputFile({ className, fileRef, fileChangeCallback, ...rest }) {
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
        <BtnCloseIcon size="12" />
      </button>
    </Form.Group>
  )
}

export default PTInputFile