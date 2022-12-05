import { render, screen } from '@testing-library/react'
import ClientForm from '../components/ClientForm/ClientForm'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

let agreeCheck, submitBtn

describe('Submit Button', () => {
  beforeEach(async () => {
    render(<ClientForm/>)
    agreeCheck = screen.getByTestId('agreeCheck')
    submitBtn = screen.getByTestId('submitBtn')
  })

  const user = userEvent.setup()

  test('is disabled, if checkbox unchecked', async () => {
    expect(submitBtn).toBeDisabled()
    await user.click(agreeCheck)     // checkbox checked
    await user.click(agreeCheck)     // checkbox unchecked
    expect(submitBtn).toBeDisabled()
  })

  test('is enabled, if checkbox checked', async () => {
    await user.click(agreeCheck)
    expect(submitBtn).toBeEnabled()
  })
})
