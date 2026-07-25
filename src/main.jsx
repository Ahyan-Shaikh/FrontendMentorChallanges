import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const todos = [
  {
    id: 1,
    task: 'Complete online Javascript course',
    isCompleted: true,
  },
  {
    id: 2,
    task: 'Jog around the park 3x',
    isCompleted: false
  },
  {
    id: 3,
    task: '10 minutes meditation',
    isCompleted: false
  },
  {
    id: 4,
    task: 'Read for 1 hour',
    isCompleted: false
  },
  {
    id: 5,
    task: 'Pickup groceries',
    isCompleted: false
  },
  {
    id: 6,
    task: 'Complete Todo app on Frontend mentor',
    isCompleted: false
  },
]

createRoot(document.getElementById('root')).render(
    <App defaultTodos={todos}/>
)