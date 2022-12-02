import { render, screen, fireEvent } from '@testing-library/react'
import ClientForm from '../components/ClientForm/ClientForm'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

const testInputLessThan2 = async (input, errorElem) => {
  await act(() => {
    fireEvent.input(input, {target: {value: 'a'}})
    fireEvent.blur(input)
  })
  expect(errorElem).toContainHTML('Пожалуйста, введите не менее 2 символов')
}

const testInputMoreThan2 = async (input, errorElem) => {
  await act(() => {
    fireEvent.input(input, {target: {value: 'absdef'}})
    fireEvent.blur(input)
  })
  expect(errorElem).toContainHTML('')
}

describe('Name Input', () => {
  test('validate less than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputLessThan2(
      screen.getByTestId('nameInput'),
      screen.getByTestId('nameError')
    )
  })

  test('validate more than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputMoreThan2(
      screen.getByTestId('nameInput'),
      screen.getByTestId('nameError')
    )
  })
})

describe('Communicate Input', () => {
  test('validate less than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputLessThan2(
      screen.getByTestId('communicateInput'),
      screen.getByTestId('communicateError')
    )
  })

  test('validate more than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputMoreThan2(
      screen.getByTestId('communicateInput'),
      screen.getByTestId('communicateError')
    )
  })
})

describe('Submit Button', () => {
  test('is disabled, if checkbox unchecked', async () => {
    render(<ClientForm/>)
    const submitBtn = screen.getByTestId('submitBtn')
    const agreeCheck = screen.getByTestId('agreeCheck')

    expect(submitBtn).toBeDisabled() // btn must be disabled

    await act(() => fireEvent.click(agreeCheck)) // check agree checkbox
    expect(submitBtn).toBeEnabled() // btn must be enabled
  })

  test('is enabled if checkbox checked', async () => {
    render(<ClientForm/>)
    const submitBtn = screen.getByTestId('submitBtn')
    const agreeCheck = screen.getByTestId('agreeCheck')

    await act(() => fireEvent.click(agreeCheck)) // check agree checkbox
    expect(submitBtn).toBeEnabled() // btn must be enabled
  })
})
