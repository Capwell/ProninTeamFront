import { Container } from 'react-bootstrap'
import stl from '../styles/ErrorPages.module.scss'
import PTHead from '../components/PTHead/PTHead'

function Custom500() {
  return (
    <>
      <PTHead
        title="ProninTeam - 500: Ошибка на стороне сервера"
      />
      <Container fluid="xxl" className={ stl.wrapper }>
        <h1 className={ stl.title }>500</h1>
        <span className={ stl.description }>
          Произошла ошибка на стороне сервера
        </span>
      </Container>
    </>
  )
}

export default Custom500