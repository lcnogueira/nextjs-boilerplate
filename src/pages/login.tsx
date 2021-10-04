import { GetServerSideProps } from 'next'
import { useCallback } from 'react'
import Login from 'templates/Login'

export default function LoginPage() {
  const onSubmit = useCallback(async ({ email, password }) => {
    console.log({ email, password })
  }, [])
  return <Login onSubmit={onSubmit} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      teste: 'test'
    }
  }
}
