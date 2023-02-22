import { Modal } from 'react-bootstrap'

function ModalForm({ show, onHide, status }) {

  return (
    <Modal
      contentClassName={ 'submit-modal' + (
        status === 'success'         // if modal status is success
          ? ' success'               // set "success" class
          : ' error'                 // set "error" class
      )}
      show={ show }
      onHide={ onHide }
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      data-testid="submitModal"
    >
      <Modal.Body className='submit-modal__text'>
        {
          status === 'requiredErr' && (
            <p>
              Пожалуйста, заполните все <b>обязательные поля</b>.
            </p>
          ) ||
          status === 'messageOrFileErr' && (
            <p>
              Пожалуйста, расскажите про свой проект.<br/><br/>
              <b>Вы можете или ответить на наши вопросы или прикрепить файл.</b><br/>
              Так уже наш первый разговор будет предметным.<br/><br/>
              С уважением, ProninTeam
            </p>
          ) ||
          status === 'success' && (
            <p>
              <b>Спасибо! Мы приняли Вашу заявку и скоро свяжемся c Вами.</b>
              <br/><br/>
              С уважением, ProninTeam
            </p>
          ) ||
          status === 'error' && (
            <p>
              Непредвиденная ошибка!<br/><br/>
              Пожалуйста, повторите попытку позже.
            </p>
          )
        }
      </Modal.Body>
    </Modal>
  )
}

export default ModalForm