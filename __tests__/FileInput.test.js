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

describe('File Input', () => {
  beforeEach(async () => {
    render(<ClientForm/>)
    fileElem.input = screen.getByTestId('fileInput')
    fileElem.label = screen.getByTestId('fileLabel')
    fileElem.remove = screen.getByTestId('fileRemove')
  })

  const user = userEvent.setup()

  test('shows attached file name', async () => {
    await user.upload(fileElem.input, file)

    expect(fileElem.label).toHaveTextContent(/(hello.png)(\* необязательно)*/)
    expect(fileElem.label).not.toHaveTextContent(/\(не более 10 мб\)/)
  })

  test('hides remove button when file is not attached', async () => {
    expect(fileElem.input.files.length).toBe(0)
    expect(fileElem.input).toHaveValue('')
    expect(fileElem.remove).toBeInTheDocument()
    expect(fileElem.remove).toBeDisabled()
  })

  test('shows remove button when file is attached', async () => {
    await user.upload(fileElem.input, file)

    expect(fileElem.input.files.length).not.toBe(0)
    expect(fileElem.input).not.toHaveValue('')
    expect(fileElem.remove).toBeInTheDocument()
    expect(fileElem.remove).toBeVisible()
    expect(fileElem.remove).toBeEnabled()
  })

  test('remove file and clear file name', async () => {
    await user.upload(fileElem.input, file)
    await user.click(fileElem.remove)

    expect(fileElem.label).toHaveTextContent(/(Прикрепить файл)(\(не более 10 мб\))(\* необязательно)*/)
    expect(fileElem.label).not.toHaveTextContent(/hello.png/)
    expect(fileElem.input).toHaveValue('')
    expect(fileElem.input.files.length).toBe(0)
  })

  test('has accepted file types', () => {
    expect(fileElem.input).toHaveAttribute(
      'accept',
      "image/*, .pdf, .doc, .docx, .txt, .ppt, .pptx, .xls, .xlsx, .rtf, .odt, .zip, .rar, .7z, .sit"
    )
  })
})