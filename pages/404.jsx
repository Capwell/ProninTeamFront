import { Container } from 'react-bootstrap'
import stl from '../styles/ErrorPages.module.scss'
import PTHead from '../components/PTHead/PTHead'

function Custom404() {
  return (
    <>
      <PTHead
        title="ProninTeam - 404: Страница не найдена"
      />
      <Container fluid="xxl" className={ stl.wrapper }>
        <h1 className={ stl.title }>404</h1>
        <span className={ stl.description }>
          Страница не найдена или еще не создана
        </span>
      </Container>
    </>
  )
}

export default Custom404