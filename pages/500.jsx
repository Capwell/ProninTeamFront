import { Container } from 'react-bootstrap'
import stl from '../styles/ErrorPages.module.scss'
import PTHead from '../components/PTHead/PTHead'
import PTButton from '../components/PTButton/PTButton'
import { useRouter } from 'next/router'

function Custom500() {
  const router = useRouter()

  return (
    <>
      <PTHead
        title="ProninTeam - 500: Ошибка на стороне сервера"
      />

      <Container fluid="xxl" className="mt-30">
        <PTButton
          variant="small-back"
          onClick={ () => router.back() }
        />
      </Container>

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