import { styled } from "@linaria/react"
import Todo from "./Todo"

const TodoInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`
const InfoButton = styled.button`
  border: none;
  background: transparent;
  color: var(--color-accent);
`
  
const TodoListWrapper = styled.div`
  border-radius: .5rem;
  color: var(--color-accent);
  background-color: var(--color-todo-bg);
  // padding: .5rem .5rem;
`
// I am working on this right now
const TodoListContainer = styled.div`
`
const TodoList = ({todos, setTodos, showValue, updateTodo, removeTodo}) => {
  let todosToShow = todos

  if (showValue.active) {
    todosToShow = todos.filter(t => !t.isCompleted)

  } else if (showValue.completed) {
    todosToShow = todos.filter(t => t.isCompleted)
  }

  const remainingTodos = [...todos.filter(t => !t.isCompleted)].length

  const handleClearCompleted = () => {
     setTodos(todos.filter(t => !t.isCompleted))
  }
  return (
      <TodoListWrapper>
        <TodoListContainer>
            {todosToShow.map(t => 
              <Todo 
                key={t.id} 
                todo={t} 
                updateTodo={updateTodo}
                removeTodo={removeTodo}
              />)}
        </TodoListContainer>
        <TodoInfo>
          {remainingTodos} items left
          <InfoButton onClick={handleClearCompleted}>Clear Completed</InfoButton>
        </TodoInfo>
      </TodoListWrapper>
  )
}
export default TodoList