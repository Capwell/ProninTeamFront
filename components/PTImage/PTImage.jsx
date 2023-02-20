import Image from 'next/image'
import stl from './PTImage.module.scss'

function PTImage({ className, ...props }) {
  return (
    <div className={ `${ className ? `${ className } ` : null}${ stl.wrapper }` }>
      {/* <Image
        className={ stl.img }
        fill
        { ...props }
      /> */}
      <img
        className={ stl.img }
        { ...props }
      />
    </div>
  )
}

export default PTImage