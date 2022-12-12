import { Modal } from "react-bootstrap";

function ModalSubmit({ show, onHide, type }) {

  return (
    <Modal
      contentClassName={ 'submit-modal' + (
        type === 'success'           // if modal type is submit
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
          type === 'requiredErr' && (
            <p>
              Пожалуйста, заполните все <b>обязательные поля</b>.
            </p>
          ) ||
          type === 'messageOrFileErr' && (
            <p>
              Пожалуйста, расскажите про свой проект.<br/><br/>
              <b>Вы можете или ответить на наши вопросы или прикрепить файл.</b><br/>
              Так уже наш первый разговор будет предметным.<br/><br/>
              С уважением, ProninTeam
            </p>
          ) ||
          type === 'success' && (
            <p>
              <b>Спасибо! Мы приняли Вашу заявку и скоро свяжемся c Вами.</b>
              <br/><br/>
              С уважением, ProninTeam
            </p>
          ) ||
          type === 'error' && (
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

export default ModalSubmit