import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import PTButton from '../PTButton/PTButton'

function PTBreadcrumb() {
  const router = useRouter()

  return (
    <Container
      as="div"
      fluid="xxl"
      className="my-30"
    >
      <PTButton
        variant="small-back"
        onClick={ () => router.back() }
      />
    </Container>
  )
}

export default PTBreadcrumb