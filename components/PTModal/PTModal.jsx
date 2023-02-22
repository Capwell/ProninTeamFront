import ModalForm from './ModalForm/ModalForm'
import ModalVideo from './ModalVideo/ModalVideo'

function PTModal({
  type = 'default',
  show,
  onHide,
  videoSrc = 'https://www.youtube.com/embed/AbK2SViu6KQ?autoplay=1',
  status
}) {

  return (
    <>
      { type === 'form' &&
        <ModalForm
          show={ show }
          onHide={ onHide }
          status={ status }
        />
      }
      { type === 'video' &&
        <ModalVideo
          show={ show }
          onHide={ onHide }
          videoSrc={ videoSrc }
        />
      }
    </>
  )
}

export default PTModal