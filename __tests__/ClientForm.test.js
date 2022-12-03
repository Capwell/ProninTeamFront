import { render, screen } from '@testing-library/react'
import ClientForm from '../components/ClientForm/ClientForm'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

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
// check textarea value inputing LESS than 20 chars
const testTextareaLessOrEmpty = async (wrapper, textarea, errorElem, isEmpty, isFile) => {
  const user = userEvent.setup()
  let file

  if (isEmpty) {
    await user.click(textarea)
  } else {
    await user.type(textarea, 'Lorem ipsum')
  }

  await user.click(errorElem) // emulation of onBlur effect

  if (isFile) {
    file = new File(['hello'], 'hello.png', {type: 'image/png'})
    await user.upload(screen.getByTestId('fileInput'), file)
  }

  if (isEmpty) {
    expect(wrapper).not.toHaveClass('invalid')
    expect(wrapper).not.toHaveClass('valid')
    expect(errorElem).toContainHTML('')
  } else {
    if (isFile) {
      expect(wrapper).toHaveClass('valid') // render green valid label
      expect(errorElem).toContainHTML('')
    } else {
      expect(wrapper).toHaveClass('invalid') // render red invalid label
      expect(errorElem).toContainHTML('Введите не менее 20 символов')
    }
  }
}
// check textarea value inputing MORE than 20 chars
const testTextareaMoreThan20 = async (wrapper, textarea, errorElem, isFile) => {
  const user = userEvent.setup()
  let file

  await user.type(textarea, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet.')
  await user.click(errorElem) // emulation of onBlur effect

  if (isFile) {
    file = new File(['hello'], 'hello.png', {type: 'image/png'})
    await user.upload(screen.getByTestId('fileInput'), file)
  }

  expect(textarea).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet.')
  expect(wrapper).toHaveClass('valid') // render green valid label
  expect(errorElem).toContainHTML('')
}

// render <ClientForm> before each test case
beforeEach(() => {
  render(<ClientForm/>)
})

describe('Name Input', () => {
  test('is empty', async () => {
    await testInputEmpty(
      screen.getByTestId('nameWrapper'),
      screen.getByTestId('nameInput'),
      screen.getByTestId('nameError')
    )
  })

  test('is less than 2 chars', async () => {
    await testInputLessThan2(
      screen.getByTestId('nameWrapper'),
      screen.getByTestId('nameInput'),
      screen.getByTestId('nameError')
    )
  })

  test('is more than 2 chars', async () => {
    await testInputMoreThan2(
      screen.getByTestId('nameWrapper'),
      screen.getByTestId('nameInput'),
      screen.getByTestId('nameError')
    )
  })

  test('is more than 20 chars', async () => {
    await testInputMoreThan20(screen.getByTestId('nameInput'))
  })
})

describe('Communicate Input', () => {
  test('is empty', async () => {
    await testInputEmpty(
      screen.getByTestId('communicateWrapper'),
      screen.getByTestId('communicateInput'),
      screen.getByTestId('communicateError')
    )
  })

  test('is less than 2 chars', async () => {
    await testInputLessThan2(
      screen.getByTestId('communicateWrapper'),
      screen.getByTestId('communicateInput'),
      screen.getByTestId('communicateError')
    )
  })

  test('is more than 2 chars', async () => {
    await testInputMoreThan2(
      screen.getByTestId('communicateWrapper'),
      screen.getByTestId('communicateInput'),
      screen.getByTestId('communicateError')
    )
  })

  test('is more than 20 chars', async () => {
    await testInputMoreThan20(screen.getByTestId('communicateInput'))
  })
})

describe('Message Textarea', () => {
  test('is empty WITH NO file', async () => {
    await testTextareaLessOrEmpty(
      screen.getByTestId('messageWrapper'),
      screen.getByTestId('messageTextarea'),
      screen.getByTestId('messageError'),
      true,
      false
    )
  })

  test('is empty WITH file', async () => {
    await testTextareaLessOrEmpty(
      screen.getByTestId('messageWrapper'),
      screen.getByTestId('messageTextarea'),
      screen.getByTestId('messageError'),
      true,
      true
    )
  })

  test('is less then 20 chars WITH NO file', async () => {
    await testTextareaLessOrEmpty(
      screen.getByTestId('messageWrapper'),
      screen.getByTestId('messageTextarea'),
      screen.getByTestId('messageError'),
      false,
      false
    )
  })

  test('is less then 20 chars WITH file', async () => {
    await testTextareaLessOrEmpty(
      screen.getByTestId('messageWrapper'),
      screen.getByTestId('messageTextarea'),
      screen.getByTestId('messageError'),
      false,
      true
    )
  })

  test('is more then 20 chars WITH NO file', async () => {
    await testTextareaMoreThan20(
      screen.getByTestId('messageWrapper'),
      screen.getByTestId('messageTextarea'),
      screen.getByTestId('messageError'),
      false
    )
  })

  test('is more then 20 chars WITH file', async () => {
    await testTextareaMoreThan20(
      screen.getByTestId('messageWrapper'),
      screen.getByTestId('messageTextarea'),
      screen.getByTestId('messageError'),
      true
    )
  })
})

describe('File Input', () => {

})

describe('Submit Button', () => {
  test('is disabled, if checkbox unchecked', async () => {
    expect(screen.getByTestId('submitBtn')).toBeDisabled()
  })

  test('is enabled, if checkbox checked', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByTestId('agreeCheck'))
    expect(screen.getByTestId('submitBtn')).toBeEnabled()
  })
})
