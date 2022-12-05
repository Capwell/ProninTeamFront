import Link from "next/link";
import { useState, useRef } from "react";
import {
  Row,
  Col,
  Form
} from "react-bootstrap";
import { useFormik } from 'formik'
// import ReCAPTCHA from 'react-google-recaptcha'
import SubmitModal from '../SubmitModal/SubmitModal'
import PTFileInput from '../PTFileInput/PTFileInput'
import stl from './ClientForm.module.scss'
import PTButton from '../PTButton/PTButton'
import api from '../../utils/api'

function ClientForm({ className }) {
  // submit button availablity
  const [isSubmitAvailable, setIsSubmitAvailable] = useState(false)
  // modal visibility
  const [modalShow, setModalShow] = useState(false)
  // modal content type
  const [modalType, setModalType] = useState('')
  // recaptcha component
  const [isLoading, setIsLoading] = useState(false)

  // const recaptcha = useRef()
  
  const fileInput = useRef()

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
      file: null,
      is_agreed: false
    },
    // set validate function
    validate: values => {
      const errors = {}
      // Name validation
      if (!values.name) errors.name = 'Обязательно';
      else if (values.name.length < 2) {
        errors.name = 'Пожалуйста, введите не менее 2 символов';
      } else if (values.name.length > 20) {
        errors.name = 'Пожалуйста, введите не более 20 символов';
      }
      // Communicate validation
      if (!values.communicate) {
        errors.communicate = 'Обязательно';
      } else if (values.communicate.length < 2) {
        errors.communicate = 'Пожалуйста, введите не менее 2 символов';
      } else if (values.communicate.length > 20) {
        errors.communicate = 'Пожалуйста, введите не более 20 символов';
      }
      // Message validation
      if (
        !fileInput.current.files[0] &&
        (values.message && values.message.length < 20)
      ) {
        errors.message = 'Введите не менее 20 символов';
      }
      // Checkbox validation
      if (!values.is_agreed) {
        errors.is_agreed = 'Обязательно'
      }

      return errors;
    },
    // set function for success validation and submitting
    onSubmit: async values => {
      setIsLoading(true)

      try {
        // Execute the reCAPTCHA when the form is submitted
        // recaptcha.current.execute();
        // const token = await recaptcha.current.executeAsync()
        // recaptcha.current.reset()

        const fData = new FormData()
        fData.append('name', values.name)
        fData.append('communicate', values.communicate)
        fData.append('message', values.message)
        fData.append('file', values.file)
        fData.append('is_agreed', values.is_agreed)
        // fData.append('token', token)

        await api.sendOffer(fData)

        setModalType('success')
        setModalShow(true)
        setTimeout(() => setModalShow(false), 3000)
      } catch (err) {
        setModalType('error')
        setModalShow(true)
        setTimeout(() => setModalShow(false), 3000)
      } finally {
        setIsLoading(false)
      }
    },
  })
  // check all values off form before submitting,
  // if is there some errors - show modal with error message and stop submitting
  const presubmitCheck = (e) => {
    e.preventDefault()
    // formik object with errors
    const errors = formik.errors
    // formik object with inputs values
    const values = formik.values

    // if required fields (name, communicate, checkbox) are empty or invalid
    if (errors.name || errors.communicate || errors.is_agreed) {
      // set type of modal for render right text
      setModalType('requiredErr')
      // show modal
      setModalShow(true)
      // close modal after 3 secs
      setTimeout(() => setModalShow(false), 3000)
      // stop submitting
      return false
    }
    // if message input is empty AND file is NOT attached
    if ((errors.message || !values.message) && !values.file) {
      setModalType('messageOrFileErr')
      setModalShow(true)
      setTimeout(() => setModalShow(false), 5000)

      return false
    }
    // if everything is OK - submit form
    formik.handleSubmit(e)
  }
  // when file es attaching, write file data in formik.vales object
  const onFileChange = (fileData) => {
    formik.values.file = fileData;

    if (formik.values.message.length) {    // if there is a message
                                           // and if file is attached - remove message errors
      if (fileData) formik.setFieldError('message', undefined)
      else formik.validateField('message') // else - validate message input
    }
  }
  // google recaptcha change handler
  // const onReCAPTCHAChange = async (captchaCode) => {
  //   // If the reCAPTCHA code is null or undefined indicating that
  //   // the reCAPTCHA was expired then return early
  //   if (!captchaCode) return
  //   // Reset the reCAPTCHA when the request has failed or successeded
  //   recaptcha.current.reset();
  // }


  return (
    <Form
      className={ `${className} ${stl.form}` }
      method="POST"
      noValidate    // remove default HTML validation
    >
{/* Modal Window */}
      <SubmitModal
        show={ modalShow }
        type={ modalType }
        onHide={ () => setModalShow(false) }
      />
{/* Google Recaptcha component (v3) */}
      {/* <ReCAPTCHA
        ref={ recaptcha }
        size="invisible" // using invisible recaptcha
        // special key, generated for this site
        sitekey={ process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY }
        onChange={ onReCAPTCHAChange }
      /> */}

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
      <Row className='mb-40'>
        <Col>
          <Form.Floating
            className={
              stl.form__input_name + ' control--text' + (
              formik.touched.name         // check is input visited (touched)
                ? formik.errors.name      // - if visited - check is input has invalid data
                  ? ' invalid' : ' valid' // --- yes - 'invalid', no - 'valid'
                : ''                      // - if no visited - set empty
            )}
            data-testid="nameWrapper"
          >
            <Form.Control
              className="control__input"
              type="text"
              id="name"
              data-testid="nameInput"
              // placeholders are necessary for bootstrap floating labels
              placeholder="&nbsp;"
              maxLength='20'
              {...formik.getFieldProps('name')}
            />

            <label className="control__label" htmlFor="brief-name">
              Представьтесь, пожалуйста:
            </label>

            <span className="control__error" data-testid="nameError">
              { // if input is visited AND input has invalid data
                formik.touched.name && formik.errors.name
                  ? formik.errors.name    // set error text
                  : null                  // set nothing
              }
            </span>
          </Form.Floating>
        </Col>
      </Row>
{/* Communicate input */}
      <Row className='mb-70'>
        <Col className='position-relative'>
          <Form.Floating
            className={
              stl.form__input_communicate + ' control--text' + (
              formik.touched.communicate    // check is input visited (touched)
                ? formik.errors.communicate // - if visited - check is input has invalid data
                  ? ' invalid' : ' valid'   // --- yes -'invalid', no - 'valid'
                : ''                        // - if no visited - set empty
            )}
            data-testid="communicateWrapper"
          >
            <Form.Control
              className="control__input"
              type="text"
              id="communicate"
              data-testid="communicateInput"
              // placeholders are necessary for bootstrap floating labels
              placeholder="&nbsp;"
              maxLength='20'
              {...formik.getFieldProps('communicate')}
            />

            <label className="control__label" htmlFor="brief-communicate">
              Как с вами связаться?
            </label>

            <span className="control__error" data-testid="communicateError">
              { // if input is visited AND input has invalid data
                formik.touched.communicate && formik.errors.communicate
                  ? formik.errors.communicate     // set error text
                  : null                          // set nothing
              }
            </span>
          </Form.Floating>
        </Col>
      </Row>
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
          <Form.Group className={
            'control--textarea' + (
              !formik.values.message.length   // if textarea is empty
                ? ''                          // - set nothing
                : formik.touched.message      // - else if textarea is visited
                  ? formik.errors.message     // --- and if textarea has errors
                    ? ' invalid' : ' valid'   // ----- set 'invalid', else - 'valid;
                  : ''                        // --- set nothing if textarea is not visited
            )}
            data-testid="messageWrapper"
          >
            <span className="control__error" data-testid="messageError">
              { // if input is visited AND input has invalid data
                formik.touched.message && formik.errors.message
                  ? formik.errors.message       // set error text
                  : null                        // set nothing
              }
            </span>

            <Form.Control
              as="textarea"
              className="control__input"
              id="message"
              rows="12"
              placeholder="Напишите письмо в свободной форме, либо ответьте на список вопросов"
              {...formik.getFieldProps('message')}
              data-testid="messageTextarea"
            />
          </Form.Group>
        </Col>
      </Row>
  {/* File input */}
      <Row className='mb-30 mb-lg-45'>
        <Col>
          <PTFileInput
            fileRef={ fileInput }
            fileChangeCallback={ onFileChange }
            id='file'
            name='file'
            // data-testid="fileInput"
          />
        </Col>
      </Row>
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
            onClick={ presubmitCheck }
            loader={ true }
            isLoad={ isLoading }
            disabled={ !isSubmitAvailable }
            type="submit"
            data-testid="submitBtn"
          />
        </Col>
      </Row>
    </Form>
  )
}


export default ClientForm