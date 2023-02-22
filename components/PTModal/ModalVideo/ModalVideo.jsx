import { Modal } from 'react-bootstrap'
import MainVideo from '../../MainVideo/MainVideo'

function ModalVideo({ show, onHide, videoSrc }) {

  return (
    <Modal
      className="video-modal"
      show={ show }
      onHide={ onHide }
      centered
    >
      <Modal.Header closeButton />

      <Modal.Body>
        <MainVideo
          className="modal-video"
          src={ videoSrc }
        />
      </Modal.Body>
    </Modal>

  )
}

export default ModalVideo