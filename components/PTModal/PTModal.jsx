import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import MainVideo from '../MainVideo/MainVideo'

function PTModal({
  type = 'default',
  err = '',
  show,
  onHide,
  videoSrc
}) {

  const attributes = type === 'submit'
    ? {
      // contentClassName: err ? 'error' : 'success',
      size: 'sm',
      // 'aria-labelledby': 'contained-modal-title-vcenter',
      backdrop: 'static',
      keyboard: false
    }
    : {}

  // if (type === 'submit') {
  //   attributes = {
  //     size: 'sm',
  //     'aria-labelledby': 'contained-modal-title-vcenter',
  //     backdrop: 'static'
  //   }
  // }

  return (
    <Modal
      contentClassName={ `modal-${ type } ${ type === 'submit' && err ? 'error' : 'success' }` }
      // className={ `modal-${ type }` }
      show={ show }
      onHide={ onHide }
      centered
      { ...attributes }
    >
      { type === 'video' && <Modal.Header closeButton /> }

      <Modal.Body>
        { type === 'submit' && (
            err === 'required' && (
              <p>
                Пожалуйста, заполните все <b>обязательные поля</b>.
              </p>
            ) ||
            err === 'message-or-file' && (
              <p>
                Пожалуйста, расскажите про свой проект.<br/><br/>
                <b>Вы можете или ответить на наши вопросы или прикрепить файл.</b><br/>
                Так уже наш первый разговор будет предметным.<br/><br/>
                С уважением, ProninTeam
              </p>
            ) ||
            err === 'error' && (
              <p>
                Непредвиденная ошибка!<br/><br/>
                Пожалуйста, повторите попытку позже.
              </p>
            ) || (
              <p>
                <b>Спасибо! Мы приняли Вашу заявку и скоро свяжемся c Вами.</b>
                <br/><br/>
                С уважением, ProninTeam
              </p>
            )
        )}
        { type === 'video' && <MainVideo className="modal-video" src={ videoSrc } /> }
        {/* // src="https://www.youtube.com/embed/AbK2SViu6KQ?autoplay=1"/>} */}
      </Modal.Body>
    </Modal>
  )
}

export default PTModal