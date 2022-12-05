import { render, screen } from '@testing-library/react'
import ClientForm from '../components/ClientForm/ClientForm'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const communicateElem = {
  wrapper: null,
  input: null,
  error: null
}

// check validation with empty input
const testInputEmpty = async (wrapper, input, errorElem) => {
  const user = userEvent.setup()
  await user.click(input)
  await user.click(errorElem)
  expect(wrapper).toHaveClass('invalid') // render red invalid label
  expect(errorElem).toContainHTML('Обязательно')
}
// check validation with inputing LESS than 2 chars into field
const testInputLessThan2 = async (wrapper, input, errorElem) => {
  const user = userEvent.setup()
  await user.type(input, 'a')
  await user.click(errorElem) // emulation of onBlur effect
  expect(wrapper).toHaveClass('invalid') // render red invalid label
  expect(errorElem).toContainHTML('Пожалуйста, введите не менее 2 символов')
}
// check validation with inputing MORE than 2 chars into field
const testInputMoreThan2 = async (wrapper, input, errorElem) => {
  const user = userEvent.setup()
  await user.type(input, 'absdef')
  await user.click(errorElem) // emulation of onBlur effect
  expect(wrapper).toHaveClass('valid') // render green valid label
  expect(errorElem).toContainHTML('')
}
// check input value with inputing MORE than 20 chars
const testInputMoreThan20 = async (input) => {
  const user = userEvent.setup()
  await user.type(input, 'Lorem ipsum dolor si amet')
  expect(input).toHaveValue('Lorem ipsum dolor si')
}

describe('Communicate Input', () => {
  beforeEach(async () => {
    render(<ClientForm/>)
    communicateElem.wrapper = screen.getByTestId('communicateWrapper')
    communicateElem.input = screen.getByTestId('communicateInput')
    communicateElem.error = screen.getByTestId('communicateError')
  })

  test('is empty', async () => {
    await testInputEmpty(communicateElem.wrapper, communicateElem.input, communicateElem.error)
  })

  test('is less than 2 chars', async () => {
    await testInputLessThan2(communicateElem.wrapper, communicateElem.input, communicateElem.error)
  })

  test('is more than 2 chars', async () => {
    await testInputMoreThan2(communicateElem.wrapper, communicateElem.input, communicateElem.error)
  })

  test('is more than 20 chars', async () => {
    await testInputMoreThan20(communicateElem.input)
  })
})