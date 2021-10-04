import React from 'react'
import * as S from './styles'

type Data = {
  email: string
  password: string
}

export type LoginTemplateProps = {
  onSubmit: (data: Data) => Promise<void>
}

export default function Login({ onSubmit }: LoginTemplateProps) {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email || !password) {
      return
    }

    onSubmit({ email, password })
  }

  return (
    <S.PageContainer>
      <S.Container>
        <h1>Login</h1>
        <S.Form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            aria-required
            ref={emailRef}
            placeholder="email"
          />
          <input
            type="password"
            placeholder="password"
            required
            aria-required
            ref={passwordRef}
          />
          <button type="submit">Send</button>
        </S.Form>
      </S.Container>
    </S.PageContainer>
  )
}
