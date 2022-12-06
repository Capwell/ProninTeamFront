import { Container } from 'react-bootstrap'
import stl from '../styles/ErrorPages.module.scss'
import PTHead from '../components/PTHead/PTHead'
import PTButton from '../components/PTButton/PTButton'
import { useRouter } from 'next/router'

function Custom404() {
  const router = useRouter()

  return (
    <>
      <PTHead
        title="ProninTeam - 404: Страница не найдена"
      />

      <Container fluid="xxl" className="mt-30">
        <PTButton
          variant="small-back"
          onClick={ () => router.back() }
        />
      </Container>

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