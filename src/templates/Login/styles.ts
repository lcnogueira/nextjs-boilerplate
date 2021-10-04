import styled from 'styled-components'

export const PageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0 1rem;
`

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 2rem;
  display: grid;
  grid-row-gap: 1rem;
  width: 100%;
  max-width: 40rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-row-gap: 0.5rem;

  input {
    padding: 0.8rem 0.5rem;
  }

  button {
    background-color: white;
    outline: none;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: filter 0.2s ease-in;
    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
  }
`

export const Content = styled.div`
  span {
    display: block;
  }
`
