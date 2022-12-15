import { Modal } from 'react-bootstrap'
import MainVideo from '../MainVideo/MainVideo'

function ModalVideo({ show, setShow }) {

  return (
    <Modal
      className="video-modal"
      show={ show }
      onHide={ () => setShow(false) }
      centered
    >
      <Modal.Header closeButton />

      <Modal.Body>
        <MainVideo
          className="modal-video"
          src="https://www.youtube.com/embed/AbK2SViu6KQ?autoplay=1"
        />
      </Modal.Body>
    </Modal>

  )
}

export default ModalVideo