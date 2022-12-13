import stl from './PTLogo.module.scss'
import Link from 'next/link'
import LogoSVG from '../SVG/LogoSVG'

function PTLogo() {
  return (
    <div className={ stl._wrapper }>
      <Link href="/" className={ stl._link }>
        <LogoSVG className={ stl._img } width="150" />
      </Link>
    </div>
  )
}

export default PTLogo