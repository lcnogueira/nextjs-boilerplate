import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getTodos, toggleTodo } from 'store/actions'
import { Store } from 'store/types'

const TodoContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: baseline;

  h1 {
    margin-right: 1rem;
  }

  button {
    max-height: 2rem;
  }
`

export default function TodoList() {
  const todos = useSelector((state: Store) => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <HeaderContainer>
        <h1>Todo List</h1>
        <button
          type="button"
          onClick={() =>
            dispatch(
              getTodos(
                'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
              )
            )
          }
        >
          Load todos
        </button>
      </HeaderContainer>
      {todos.map((todo) => (
        <TodoContainer key={todo.id}>
          <input
            type="checkbox"
            onClick={() => dispatch(toggleTodo(todo.id))}
          />
          <span>{todo.text}</span>
          <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </TodoContainer>
      ))}
    </>
  )
}
