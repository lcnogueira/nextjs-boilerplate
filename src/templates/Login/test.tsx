import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Login from '.'

const onSubmit = jest.fn()
const mockedEmail = 'luizcns18@gmail.com'
const mockedPassword = 'test'

describe('Login template', () => {
  it('renders the screen properly', () => {
    render(<Login onSubmit={onSubmit} />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('only submits the code if fields are filled', async () => {
    render(<Login onSubmit={onSubmit} />)

    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText(/password/i)
    const button = screen.getByRole('button', { name: /send/i })

    userEvent.type(email, mockedEmail)
    userEvent.click(button)
    expect(onSubmit).not.toHaveBeenCalled()

    userEvent.type(password, mockedPassword)
    userEvent.click(button)

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith({
      email: mockedEmail,
      password: mockedPassword
    })
  })
})
