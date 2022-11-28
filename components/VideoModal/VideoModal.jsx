import { useState } from "react";
import {
  Button,
  Modal
} from "react-bootstrap";
import stl from './VideoModal.module.scss'

function VideoModal({ show, setShow }) {

  const handleClose = () => setShow(false)

  return (
    <Modal
      className='video-modal'
      show={ show }
      onHide={ handleClose }
      centered
    >
      <Modal.Header closeButton />

      <Modal.Body>
        <iframe
          className='modal-video'
          src="https://www.youtube.com/embed/AbK2SViu6KQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal.Body>
    </Modal>

  )
}

export default VideoModal