import { render, screen, fireEvent } from '@testing-library/react'
import ClientForm from '../components/ClientForm/ClientForm'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

// check validation with inputing LESS than 2 cars into field
const testInputLessThan2 = async (wrapper, input, errorElem) => {
  const user = userEvent.setup()
  await user.type(input, 'a')
  await user.click(errorElem) // emulation of onBlur effect
  expect(wrapper).toHaveClass('invalid') // render red invalid label
  expect(errorElem).toContainHTML('Пожалуйста, введите не менее 2 символов')
}
// check validation with inputing MORE than 2 cars into field
const testInputMoreThan2 = async (wrapper, input, errorElem) => {
  const user = userEvent.setup()
  await user.type(input, 'absdef')
  await user.click(errorElem) // emulation of onBlur effect
  expect(wrapper).toHaveClass('valid') // render green valid label
  expect(errorElem).toContainHTML('')
}
// check input value with inputing MORE than 20 cars
const testInputMoreThan20 = async (input) => {
  const user = userEvent.setup()
  await user.type(input, 'Lorem ipsum dolor si')
  expect(input).toHaveValue('Lorem ipsum dolor si')
}

describe('Name Input', () => {
  test('validate less than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputLessThan2(
      screen.getByTestId('nameWrapper'),
      screen.getByTestId('nameInput'),
      screen.getByTestId('nameError')
    )
  })

  test('validate more than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputMoreThan2(
      screen.getByTestId('nameWrapper'),
      screen.getByTestId('nameInput'),
      screen.getByTestId('nameError')
    )
  })

  test('validate more than 20 chars', async () => {
    render(<ClientForm/>)
    await testInputMoreThan20(screen.getByTestId('nameInput'))
  })
})

describe('Communicate Input', () => {
  test('validate less than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputLessThan2(
      screen.getByTestId('communicateWrapper'),
      screen.getByTestId('communicateInput'),
      screen.getByTestId('communicateError')
    )
  })

  test('validate more than 2 chars', async () => {
    render(<ClientForm/>)
    await testInputMoreThan2(
      screen.getByTestId('communicateWrapper'),
      screen.getByTestId('communicateInput'),
      screen.getByTestId('communicateError')
    )
  })

  test('validate more than 20 chars', async () => {
    render(<ClientForm/>)
    await testInputMoreThan20(screen.getByTestId('communicateInput'))
  })
})

describe('Submit Button', () => {
  test('is disabled, if checkbox unchecked', async () => {
    render(<ClientForm/>)
    expect(screen.getByTestId('submitBtn')).toBeDisabled()
  })

  test('is enabled if checkbox checked', async () => {
    render(<ClientForm/>)
    await act(() => fireEvent.click(screen.getByTestId('agreeCheck')))
    expect(screen.getByTestId('submitBtn')).toBeEnabled()
  })
})
