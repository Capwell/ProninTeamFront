function MainVideo({ className = '', src }) {

  return (
    <iframe
      className={ className }
      src={ src }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default MainVideo