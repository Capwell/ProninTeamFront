function BurgerBtn({ className = '', onClick }) {

  return (
    <button
      className={ `${ className } btn--burger` }
      onClick={ onClick }
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export default BurgerBtn