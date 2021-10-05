import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Store } from './types'

import {
  ActionTypes,
  SET_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  ADD_TODO
} from './actions'

import { addTodo, removeTodo, toggleTodo, updateTodo } from './reducers'

// Redux implementation
function todoReducer(
  state: Store = {
    todos: [],
    newTodo: ''
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, action.payload)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.text)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload)
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload)
      }

    default:
      return state
  }
}

const store = createStore(todoReducer, applyMiddleware(thunk))

export default store
