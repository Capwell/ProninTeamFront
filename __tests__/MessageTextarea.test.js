import { render, screen } from '@testing-library/react'
import ClientForm from '../components/ClientForm/ClientForm'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const file = new File(['hello'], 'hello.png', {type: 'image/png'})

const fileElem = {
  label: null,
  input: null,
  remove: null
}

const messageElem = {
  wrapper: null,
  input: null,
  error: null
}

// check textarea value inputing LESS than 20 chars
const testTextareaLessOrEmpty = async (isEmpty, isFile) => {
  const user = userEvent.setup()

  if (isEmpty) await user.click(messageElem.input)
  else await user.type(messageElem.input, 'Lorem ipsum')

  await user.click(messageElem.error) // emulation of onBlur effect

  if (isFile) await user.upload(fileElem.input, file)

  if (isEmpty) {
    expect(messageElem.wrapper).not.toHaveClass('invalid')
    expect(messageElem.wrapper).not.toHaveClass('valid')
    expect(messageElem.error).toContainHTML('')
  } else {
    if (isFile) {
      expect(messageElem.wrapper).toHaveClass('valid') // render green valid label
      expect(messageElem.error).toContainHTML('')
    } else {
      expect(messageElem.wrapper).toHaveClass('invalid') // render red invalid label
      expect(messageElem.error).toContainHTML('Введите не менее 20 символов')
    }
  }
}
// check textarea value inputing MORE than 20 chars
const testTextareaMoreThan20 = async (isFile) => {
  const user = userEvent.setup()

  await user.type(messageElem.input, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet.')
  await user.click(messageElem.error) // emulation of onBlur effect

  if (isFile) await user.upload(fileElem.input, file)

  expect(messageElem.input).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet.')
  expect(messageElem.wrapper).toHaveClass('valid') // render green valid label
  expect(messageElem.error).toContainHTML('')
}

describe('Message Textarea', () => {
  beforeEach(async () => {
    render(<ClientForm/>)
    messageElem.wrapper = screen.getByTestId('messageWrapper')
    messageElem.input = screen.getByTestId('messageTextarea')
    messageElem.error = screen.getByTestId('messageError')
    fileElem.input = screen.getByTestId('fileInput')
  })

  test('is empty WITH NO file', async () => {
    await testTextareaLessOrEmpty(true, false)
  })

  test('is empty WITH file', async () => {
    await testTextareaLessOrEmpty(true, true)
  })

  test('is less then 20 chars WITH NO file', async () => {
    await testTextareaLessOrEmpty(false, false)
  })

  test('is less then 20 chars WITH file', async () => {
    await testTextareaLessOrEmpty(false, true)
  })

  test('is more then 20 chars WITH NO file', async () => {
    await testTextareaMoreThan20(false)
  })

  test('is more then 20 chars WITH file', async () => {
    await testTextareaMoreThan20(true)
  })
})