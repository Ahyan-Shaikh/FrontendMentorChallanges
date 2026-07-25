import { styled } from "@linaria/react"

const Form = styled.form`
  background-color: var(--color-todo-bg);
  color: var(--color-primary);
  margin-bottom: 1rem;
  border-radius: .3rem;
`
const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 0.8rem 1.2rem;
  color: var(--color-accent-sec);
`

const TodoForm = ({ todoValue, setTodoValue, addTodo}) => {
  const handleValueChange = (event) => {
    setTodoValue(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    addTodo()
    setTodoValue('')
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input 
        type="text" 
        placeholder="Create a new todo..."
        value={todoValue}
        onChange={handleValueChange}
      />
    </Form>
  )
}
export default TodoForm