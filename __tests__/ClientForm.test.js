import { render, screen } from '@testing-library/react'
import ClientForm from '../components/ClientForm/ClientForm'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

let nameInput, communicateInput, messageInput, fileInput, checkbox, submit, modal

const file = new File(['hello'], 'hello.png', {type: 'image/png'})

const rightData = {
  name: 'John Doe',
  communicate: '88005553535',
  message: 'dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo'
}

const wrongData = {
  name: 'a',
  communicate: '1',
  message: 'lorem ipsum'
}
// input values in form data and send this form
const inputData = async (nameState, communicateState, messageState, isFileState) => {
  const user = userEvent.setup()

  if (nameState[0]) {
    if (nameState[1] === 'right') await user.type(nameInput, rightData.name)
    else await user.type(nameInput, wrongData.name)
  }

  if (communicateState[0]) {
    if (communicateState[1] === 'right') await user.type(communicateInput, rightData.communicate)
    else await user.type(communicateInput, wrongData.communicate)
  }

  if (messageState[0]) {
    if (messageState[1] === 'right') await user.type(messageInput, rightData.message)
    else await user.type(messageInput, wrongData.message)
  }

  if (isFileState) await user.upload(fileInput, file)

  await user.click(checkbox)
  await user.click(submit)

  modal = screen.getByTestId('submitModal')
}

describe('Form', () => {
  beforeEach(() => {
    render(<ClientForm/>)
    nameInput = screen.getByTestId('nameInput')
    communicateInput = screen.getByTestId('communicateInput')
    messageInput = screen.getByTestId('messageTextarea')
    fileInput = screen.getByTestId('fileInput')
    checkbox = screen.getByTestId('agreeCheck')
    submit = screen.getByTestId('submitBtn')
  })

  test('not sending if "Name" is empty', async () => {
    await inputData([false], [true, 'right'], [true, 'right'], true)

    expect(modal).toBeVisible()
    expect(modal).toHaveTextContent(/Пожалуйста, заполните все обязательные поля./)
  })

  test('not sending if "Name" is invalid', async () => {
    await inputData([true, 'wrong'], [true, 'right'], [true, 'right'], true)

    expect(modal).toBeVisible()
    expect(modal).toHaveTextContent(/Пожалуйста, заполните все обязательные поля./)
  })

  test('not sending if "Communicate" is empty', async () => {
    await inputData([true, 'right'], [false], [true, 'right'], true)

    expect(modal).toBeVisible()
    expect(modal).toHaveTextContent(/Пожалуйста, заполните все обязательные поля./)
  })

  test('not sending if "Communicate" is invalid', async () => {
    await inputData([true, 'right'], [true, 'wrong'], [true, 'right'], true)

    expect(modal).toBeVisible()
    expect(modal).toHaveTextContent(/Пожалуйста, заполните все обязательные поля./)
  })

  test('not sending if "Message" and "File" is empty', async () => {
    await inputData([true, 'right'], [true, 'right'], [false], false)

    expect(modal).toBeVisible()
    expect(modal).toHaveTextContent(/Пожалуйста, расскажите про свой проект\.Вы можете или ответить на наши вопросы или прикрепить файл\.Так уже наш первый разговор будет предметным\.С уважением, ProninTeam/)
  })

  test('not sending if "File" is empty and "Message" is invalid', async () => {
    await inputData([true, 'right'], [true, 'right'], [true, 'wrong'], false)

    expect(modal).toBeVisible()
    expect(modal).toHaveTextContent(/Пожалуйста, расскажите про свой проект\.Вы можете или ответить на наши вопросы или прикрепить файл\.Так уже наш первый разговор будет предметным\.С уважением, ProninTeam/)
  })
})