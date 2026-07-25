import { styled } from "@linaria/react"
import { useState } from "react"
import crossIcon from "../assets/images/icon-cross.svg"
const StyledTodo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--color-primary);
  padding: .8rem 1.2rem;
  border-bottom: 1px solid var(--color-accent-sec);
`
const Input = styled.input`
  // appearance: none;
  // background-color: #fff;
  // margin: 0;

  // font: inherit;
  // color: currentColor;
  // width: 1.15em;
  // height: 1.15em;
  // border: 0.15em solid currentColor;
  // border-radius: 0.15em;
  // transform: translateY(-0.075em);

  // display: grid;
  // place-content: center;


  // &::before {
  //   content: "";
  //   width: 0.65em;
  //   height: 0.65em;
  //   transform: scale(0);
  //   transition: 120ms transform ease-in-out;
  //   background: url('../assets/images/icon-check.svg') 0 0px no-repeat;
  //   // box-shadow: inset 1em 1em var(--color-bg);
  }

  &:checked::before {
    transform: scale(1);
  }

`


const Button = styled.button`
  border: 0;
  background: transparent;
  color: var(--color-accent-sec);
  font-size: 1.1rem;
  cursor: pointer;

`
const TodoContentWrapper = styled.span`
  :not(:last-child) {
    margin-right: 1rem;
  }
`
const Todo = ({todo, updateTodo, removeTodo}) => {
  const [markCompleted, setMarkCompleted] = useState(false)

  const toggleCompletion = () => {
    const nextMarkCompleted = !markCompleted
    setMarkCompleted(nextMarkCompleted)
    updateTodo({
      ...todo,
      isCompleted: nextMarkCompleted
    })
  }

  const handleRemoveTodo = () => {
    removeTodo(todo.id)
  }

  const styleTask = {
    color: 'hsl(235, 16%, 43%)',
    textDecoration: todo.isCompleted ? 'line-through' : 'none'
  }

  return (
    <StyledTodo>
      <TodoContentWrapper>
        <Input type="checkbox" checked={todo.isCompleted} onChange={toggleCompletion}/>
        <span style={
          todo.isCompleted 
            ? styleTask
            : { color: 'white' }

        }>{todo.task}</span>
      </TodoContentWrapper>
      <Button type="button"
        onClick={handleRemoveTodo}
      >
        <img src={crossIcon} alt="" />
      </Button>
    </StyledTodo>
  )
}
export default Todo