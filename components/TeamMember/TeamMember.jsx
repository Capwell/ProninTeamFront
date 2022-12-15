import Image from 'next/image'
import stl from './TeamMember.module.scss'

function TeamMember({ className = '', photo, name, mainRole, roles }) {
  return (
    <div className={ `${ stl.member } ${ className }` }>
      <div className={ stl.member__photo }>
        <Image
          className={ stl.photo__img }
          src={ photo || '/images/team/no-photo.svg' }
          loader={ () => photo || '/images/team/no-photo.svg' }
          fill
          alt={ 'Фото ' + name }
        />
      </div>
      <span className={ stl.member__name }>{ name }</span>
      <span className={ stl.member__mainRole }>{ mainRole }</span>
      {
        roles && <span className={ stl.member__roles }>{ roles }</span>
      }
    </div>
  )
}

export default TeamMember