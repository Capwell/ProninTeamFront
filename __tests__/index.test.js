import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

// test testing for heading 'Наша миссия' must be on the Home page
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Наша миссия/i,
    })

    expect(heading).toBeInTheDocument()
  })
})