import { Container } from 'react-bootstrap'

function PTContainer({ children, ...props }) {
  return (
    <Container fluid="xxl" { ...props }>
      { children }
    </Container>
  )
}

export default PTContainer