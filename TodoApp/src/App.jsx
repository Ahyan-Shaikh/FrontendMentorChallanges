import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodosToShow from "./components/TodosToShow"
import { styled } from "@linaria/react"
import "./globals"
import { css } from "@linaria/core"
import Title from "./components/Title"
import NavBar from "./components/NavBar"
import sunIcon from "./assets/images/icon-sun.svg"
import moonIcon from "./assets/images/icon-moon.svg"

/*
- Navy 950 hsl(235, 21%, 11%)
- Navy 900: hsl(235, 24%, 19%)
- Purple 300: hsl(234, 39%, 85%)
- Purple 100 (hover): hsl(236, 33%, 92%)
- Purple 600: hsl(235, 16%, 43%)
- Purple 700: hsl(233, 14%, 35%)
- Purple 800: hsl(237, 14%, 26%)
- Gray 600: hsl(236, 9%, 61%)
*/

const darkTheme = css`
  --color-todo-bg: hsl(235, 24%, 19%);
  --color-bg: hsl(235, 24%, 19%);
  --color-primary: hsl(236, 33%, 92%);
  --color-accent: hsl(233, 14%, 35%);

  --color-accent-sec: hsl(235, 16%, 43%);
  --color-app-bg: hsl(235, 21%, 11%);
  --bg-image-mobile: url('/src/assets/images/bg-mobile-dark.jpg');
  --bg-image-desktop: url('/src/assets/images/bg-desktop-dark.jpg');
`
const lightTheme = css`
  --color-todo-bg: pink;
  --color-bg: lightblue;
  --color-primary: hsl(236, 33%, 92%);
  --color-accent: hsl(233, 14%, 35%);

  --color-accent-sec: hsl(235, 16%, 43%);
  --color-app-bg: lightblue;
  --bg-image: url('/src/assets/images/bg-mobile-light.jpg');

`
const Container = styled.div`
  border: 2px solid red;
  // padding: 2rem;
  font-family: "Josefin Sans";
  background-color: var(--color-app-bg);
  min-height: 100vh;
  
  background-image: var(--bg-image-mobile);
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  justify-content: center;

  @media (min-width: 1440px) {
    background-image: var(--bg-image-desktop);
    background-repeat: no-repeat;
    background-size: contain;
  }

`
const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
`
const ElementsWrapper = styled.div`
  width: 90%;
  max-width: 40rem;
  padding: 1rem 2rem;
`
function App({defaultTodos}) {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(defaultTodos)
  const [show, setShow] = useState({ active: false, completed: false })
  const [isActive, setIsActive] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      task: todo,
      isCompleted: false
    }
    setTodos(todos.concat(newTodo))
  }

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(t => t.id === updatedTodo.id ? updatedTodo: t))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const iconToShow = isDarkTheme 
    ? sunIcon
    : moonIcon

  console.log('width...', window.innerWidth)
  console.log('height...', window.innerHeight)
  return (
    <Container className={ isDarkTheme ? darkTheme: lightTheme}>
        <ElementsWrapper>
          <NavBar>
            <Title title={'TODO'}/>
            <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
              <img  src={iconToShow} alt="" />
            </ThemeButton>
          </NavBar>
          <TodoForm todoValue={todo} setTodoValue={setTodo} addTodo={addTodo}/>
          <TodoList todos={todos} setTodos={setTodos} showValue={show} updateTodo={updateTodo} removeTodo={removeTodo}/>
          <TodosToShow isActive={isActive} setIsActive={setIsActive} showValue={show} handleShow={setShow}/>
        </ElementsWrapper>
    </Container>
  )
}

export default App
