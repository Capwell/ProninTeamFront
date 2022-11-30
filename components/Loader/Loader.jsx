import stl from './Loader.module.scss'

function Loader({ className, size = 'md' }) {
  const classes = `${stl.loader} ${stl[size]} ${className || ''}`

  return (
  <span
    className={ classes }
    role="status"
    aria-hidden="true"
  >
    <svg className={ stl.loader__img } viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect id="line-1" x="27" y="3" width="6" height="18" rx="1" fill="#E1E1E1"/>
      <rect id="line-2" x="46.9707" y="8.78674" width="6" height="18" rx="1" transform="rotate(45 46.9707 8.78674)" fill="#E1E1E1"/>
      <rect id="line-3" x="57" y="27" width="6" height="18" rx="1" transform="rotate(90 57 27)" fill="#E1E1E1"/>
      <rect id="line-4" x="51.2134" y="46.9706" width="6" height="18" rx="1" transform="rotate(135 51.2134 46.9706)" fill="#E1E1E1"/>
      <rect id="line-5" x="33" y="57" width="6" height="18" rx="1" transform="rotate(-180 33 57)" fill="#E1E1E1"/>
      <rect id="line-6" x="13.0293" y="51.2133" width="6" height="18" rx="1" transform="rotate(-135 13.0293 51.2133)" fill="#E1E1E1"/>
      <rect id="line-7" x="3" y="33" width="6" height="18" rx="1" transform="rotate(-90 3 33)" fill="#E1E1E1"/>
      <rect id="line-8" x="8.78662" y="13.0294" width="6" height="18" rx="1" transform="rotate(-45 8.78662 13.0294)" fill="#E1E1E1"/>
    </svg>
    <span className="visually-hidden">Подождите...</span>
  </span>
  )
}

export default Loader