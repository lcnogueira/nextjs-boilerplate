import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from 'store/actions'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

export default function TodoAdd() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  return (
    <Container>
      <input
        placeholder="new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(newTodo))
          setNewTodo('')
        }}
      >
        Add todo
      </button>
    </Container>
  )
}
