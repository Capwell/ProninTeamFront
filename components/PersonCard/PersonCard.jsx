import Image from 'next/image'
import stl from './PersonCard.module.scss'

function PersonCard({
  className = '',
  photo = '/images/team/no-photo.svg',
  name = '',
  mainRole = '',
  roles = ''
}) {
  return (
    <div className={ `${ stl._wrapper } ${ className }` }>
      <div className={ stl._photo }>
        <Image
          className={ stl.photo__img }
          src={ photo }
          loader={ () => photo }
          fill
          alt={ photo ? `Фото ${ name }` : 'Нет фото' }
        />
      </div>
      { name && <span className={ stl._name }>{ name }</span> }
      { mainRole && <span className={ stl._mainRole }>{ mainRole }</span> }
      { roles && <span className={ stl._roles }>{ roles }</span> }
    </div>
  )
}

export default PersonCard