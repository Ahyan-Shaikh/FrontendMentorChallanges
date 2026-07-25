import { styled } from "@linaria/react"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
  background-color: var(--color-todo-bg);
  padding: .8rem;
  border-radius: 0.5rem;
`
const Button = styled.button`
  border: none;
  background: transparent;
  color: var(--color-accent);
  padding: .2rem .5rem;
  cursor: pointer;
  font-size: 1rem;
`

const TodosToShow = ({showValue, handleShow,setIsActive, isActive}) => {

  const selectedButtonStyle = {
    color: 'hsl(220, 98%, 61%)'
  }


  return (
    <Container>
      <Button
        style={isActive == 0 ? selectedButtonStyle: null}
        onClick={() => {
        setIsActive(0)
        handleShow({...showValue, active: false, completed: false})
      }}>All</Button>
      <Button 
        style={isActive == 1 ? selectedButtonStyle: null}
        onClick={() => {
        setIsActive(1)
        handleShow({
          ...showValue,
          active: true,
          completed: false
        })
      }}>Active</Button>
      <Button 
        style={isActive == 2 ? selectedButtonStyle: null}
      onClick={() => {
        setIsActive(2)
        handleShow({
          ...showValue,
          active: false,
          completed: true
        })
      }}>Completed</Button>
    </Container>
  )
}
export default TodosToShow