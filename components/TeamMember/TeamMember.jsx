import Image from 'next/image'
import stl from './TeamMember.module.scss'

function TeamMember({ photo, name, mainRole, roles }) {
  return (
    <div className={ stl.member }>
      <div className={ stl.member__photo }>
        <Image
          className={ stl.photo__img }
          src={ photo }
          width='255'
          height='260'
          alt={ 'Фото ' + name }
        />
      </div>
      <span className={ stl.member__name }>{ name }</span>
      <span className={ stl.member__mainRole }>{ mainRole }</span>
      <span className={ stl.member__roles }>{ roles }</span>
    </div>
  )
}

export default TeamMember