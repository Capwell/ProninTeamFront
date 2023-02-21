import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Row, Col, Form } from "react-bootstrap"
import { useFormik } from 'formik'
import PTModal from '../PTModal/PTModal'
import PTInputText from '../PTInputText/PTInputText'
import PTTextarea from '../PTTextarea/PTTextarea'
import PTInputFile from '../PTInputFile/PTInputFile'
import PTButton from '../PTButton/PTButton'
import stl from './ClientForm.module.scss'
import api from '../../utils/api'

function ClientForm({ className, targetPage }) {

  const [isSubmitAvailable, setIsSubmitAvailable] = useState(false) // submit button availablity
  const [modalShow, setModalShow] = useState(false) // modal visibility
  const [modalStatus, setModalStatus] = useState('') // modal content type
  const [isLoading, setIsLoading] = useState(false) // loading state
  const fileInput = useRef()
  const captchaToken = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const formRef = useRef()

  // Add reCaptcha script (componentDidMount)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${captchaToken}`
    document.body.appendChild(script)
  }, [])

  // toggle submit button availability
  const toggleSubmitAvailability = e => {
    // if checkbox is checked - button is available
    if (e.target.checked) setIsSubmitAvailable(true)
    else setIsSubmitAvailable(false)
  }

  // use formik library for validate and submit form
  const formik = useFormik({
    // set initial values for form's inputs
    initialValues: {
      name: '',
      communicate: '',
      message: '',
      is_agreed: false
    },
    // set validate function
    validate: values => {
      const errors = {}
      // Name validation
      if (!values.name) errors.name = 'Обязательно'
      else if (values.name.trim().length < 2) {
        errors.name = 'Пожалуйста, введите не менее 2 символов'
      } else if (values.name.trim().length > 20) {
        errors.name = 'Пожалуйста, введите не более 20 символов'
      }
      // Communicate validation
      if (!values.communicate) errors.communicate = 'Обязательно'
      else if (values.communicate.trim().length < 2) {
        errors.communicate = 'Пожалуйста, введите не менее 2 символов'
      } else if (values.communicate.trim().length > 20) {
        errors.communicate = 'Пожалуйста, введите не более 20 символов'
      }
      // Message validation
      if (
        !fileInput.current.files[0] &&
        (values.message && values.message.trim().length < 20)
      ) {
        errors.message = 'Введите не менее 20 символов'
      }
      // Checkbox validation
      if (!values.is_agreed) {
        errors.is_agreed = 'Обязательно'
      }

      return errors
    },
    // set function for success validation and submitting
    onSubmit: async () => {
      setIsLoading(true)
      // call grecaptcha.execute on submit event
      window.grecaptcha.ready(async () => {
        window.grecaptcha.execute(captchaToken, { action: "submit" })
          .then(async (token) => {
            try {
              // create FormData obj with all values from form
              const fData = new FormData(formRef.current)
              // trim text values in FormData obj
              fData.set('name', fData.get('name').trim())
              fData.set('communicate', fData.get('communicate').trim())
              fData.set('message', fData.get('message').trim())
              // append token
              fData.append('token', token)
              // send FormData to server
              await api.sendOffer(fData)
              // if no errors
              setModalStatus('success') // show success modal
            } catch (err) {
              setModalStatus('error') // show error modal
              // setModalErr('error') // show error modal
            } finally {
              setModalShow(true)
              setTimeout(() => setModalShow(false), 3000) // close it in 3 sec
              setIsLoading(false)
            }
          })
      })
    },
  })
  // check all values off form before submitting,
  // if is there some errors - show modal with error message and stop submitting
  const presubmitCheck = (e) => {
    e.preventDefault()
    const errors = formik.errors // formik object with errors
    const values = formik.values // formik object with inputs values

    // if required fields (name, communicate, checkbox) are empty or invalid
    if (errors.name || errors.communicate || errors.is_agreed) {
      setModalStatus('requiredErr') // set type of modal
      // setModalErr('required') // set type of modal
      setModalShow(true) // show modal
      setTimeout(() => setModalShow(false), 3000) // close modal after 3 secs

      return false // stop submitting
    }
    // if message input is empty AND file is NOT attached
    if ((errors.message || !values.message) && !values.file) {
      setModalStatus('messageOrFileErr')
      // setModalErr('message-or-file')
      setModalShow(true)
      setTimeout(() => setModalShow(false), 5000)

      return false
    }

    formik.handleSubmit(e)
  }
  // when file es attaching, write file data in formik.vales object
  const onFileChange = (fileData) => {
    // if there is a message
    if (formik.values.message.length) {
      // and if file is attached - remove message errors
      if (fileData) formik.setFieldError('message', undefined)
      else formik.validateField('message') // else - validate message input
    }
  }
  // check errors on inputs
  const inputErrorHandler = (inputName) => {
    const err = { status: undefined, text: '' }
    // if input is message and it is empty
    if (inputName === 'message' && !formik.values[inputName].length) {
      err.status = undefined
      err.text = ''
    } else {
      if (formik.touched[inputName]) { // and if input was touched
        if (formik.errors[inputName]) { // and there are some errors
          err.status = true
          err.text = formik.errors[inputName]
        } else {
          err.status = false
          err.text = ''
        }
      } else { // if input is not touched
        err.status = undefined
        err.text = ''
      }
    }

    return err
  }

  return (
    <Form
      className={ `${className} ${stl.form}` }
      method="POST"
      noValidate    // remove default HTML validation
      ref={ formRef }
    >
{/* Modal Window */}
{/* TODO: доделать компонент модалки */}
      <PTModal
        type="form"
        show={ modalShow }
        onHide={ () => setModalShow(false) }
        status={ modalStatus }
      />
{/* Header of form */}
      <h2 className={ stl.form__title }>
        Хотите заказать проект?
      </h2>

      <p className={ stl.form__contacts }>
        Позвоните <a
          className={ stl.contacts__link }
          href='tel:+79272703006'>
            +7 927 270-30-06
        </a>,
        напишите в
        telegram: <a
          className={ stl.contacts__link }
          href='https://t.me/andpronin'
          target='_blank'
          rel="noreferrer">
            @andpronin
        </a> или заполните форму:
      </p>
{/* Name input */}
      <PTInputText
        id="name"
        className='mb-40'
        label="Представьтесь, пожалуйста:"
        isError={ inputErrorHandler('name') }
        maxLength='20'
        {...formik.getFieldProps('name')}
      />
{/* Communicate input */}
      <PTInputText
        id="communicate"
        className='mb-70'
        label="Как с вами связаться?"
        isError={ inputErrorHandler('communicate') }
        maxLength='20'
        {...formik.getFieldProps('communicate')}
      />
{/* Message questions */}
      <Row className='mb-30'>
        <Col lg={{ span: '6', order: 'last' }}>
          <ul className={ stl.form__questions + ' ms-xl-30' }>
            <li className={ stl.questions__item }>
              <span className={ stl.item__title }>Чем вы занимаетесь?</span>
              <span className={ stl.item__text }>Расскажите о своей компании.</span>
            </li>

            <li className={ stl.questions__item }>
              <span className={ stl.item__title }>Что мы можем для вас сделать?</span>
              <span className={ stl.item__text }>Пару слов о проекте</span>
            </li>

            <li className={ stl.questions__item }>
              <span className={ stl.item__title }>Сколько денег планируете потратить?</span>
              <span className={ stl.item__text }>Соображения о бюджете</span>
            </li>
          </ul>
        </Col>
{/* Message textarea */}
        <Col lg={{ span: '6', order: 'first' }}>
          <PTTextarea
            id="message"
            placeholder="Напишите письмо в свободной форме, либо ответьте на список вопросов"
            isError={ inputErrorHandler('message') }
            rows="12"
            {...formik.getFieldProps('message')}
          />
        </Col>
      </Row>
  {/* File input */}
      <PTInputFile
        className='mb-30 mb-lg-45'
        fileRef={ fileInput }
        fileChangeCallback={ onFileChange }
        id='file'
        name='file'
      />
  {/* Form text */}
      <p className={ stl.form__text + ' mb-40'}>
        Пожалуйста, расскажите про свой проект.<br/>
        Вы можете или ответить на наши вопросы, или прикрепить файл с описанием.<br/>
        Так первый разговор будет предметным.
      </p>
  {/* Submit button and legal */}
      <Row className='d-flex align-items-center'>
        <Col
          lg={{ order: 'last' }}
          className='
            d-flex
            justify-content-center justify-content-lg-start
            mb-40 mb-lg-0
          '
        >
          <Form.Group className={ stl.form__checkbox }>
            <Form.Check.Input
              id='is_agreed'
              className={ stl.checkbox__input }
              type='checkbox'
              name='is_agreed'
              onChange={ e => {
                formik.handleChange(e)
                toggleSubmitAvailability(e)
              }}
              value={ formik.values.is_agreed }
              data-testid="agreeCheck"
            />

            <Form.Check.Label className={ stl.checkbox__label }>
              Я даю свое <Link href='/legal#consent'>согласие</Link> ProninTeam на обработку
              моей персональной информации на условиях, определенных [<Link href='/legal#privacy'>Политикой конфиденциальности</Link>]
            </Form.Check.Label>
          </Form.Group>
        </Col>

        <Col
          lg={{ span: 'auto', order: 'first' }}
          className='d-flex justify-content-center'
        >
          <PTButton
            variant="primary"
            text="Отправить ответы"
            loader={ true }
            isLoad={ isLoading }
            disabled={ !isSubmitAvailable }
            type="submit"
            onClick={ presubmitCheck }
            data-action="submit"
            data-testid="submitBtn"
          />
        </Col>
      </Row>
    </Form>
  )
}

export default ClientForm