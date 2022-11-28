import { Form } from 'react-bootstrap';
import { useRef, useState } from 'react';

function PTFileInput({ fileRef, fileChangeCallback, ...rest }) {
  const fileLabel = useRef()
  const [fileName, setFileName] = useState('')

  // check file presense and than get it's size and name
  const checkFile = e => {
    const fileData = e.target.files[0]

    if (fileData) {
      const size = fileData.size

      // check is file more than 10 MB
      if (size > 10 * 1024 * 1024) {
        return false
      }

      const name = fileData.name
      setFileName(name)
      fileChangeCallback(fileData)       // send file data to formik.values object

    } else return false
  }

  return (
    <Form.Group className="control--file">
      <Form.Label className="control__label" htmlFor='file'>
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
        { ...rest }
        ref={ fileRef }
        className="control__input"
        type='file'
        onChange={ checkFile }
      />
    </Form.Group>
  )
}

export default PTFileInput