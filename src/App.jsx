import Listcard from "./components/listcard/listcard"
import "./App.css"
import { useState, useEffect } from "react"

function App() {

  let tasksData =
    [
      {
        id: 1,
        title: "Task 1",
        completed: true
      },
      {
        id: 2,
        title: "Task 2",
        completed: true
      },
      {
        id: 3,
        title: "Task 3",
        completed: true
      }
    ]


  // ESTADOS
  const [tasks, setTasks] = useState([])


  const fetchAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log(data);
    setTasks(data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const handleStatus = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
         return {
          ...item, // se mantiene el resto de propiedades
          completed: !item.completed // se le llamada ! cambiar a lo controlario
         }
      }
      return item
    })
    setTasks(newTasks)
  }

  return (
    <>
      <div className="titlePage">
        <h1>Task List</h1>
        <button className="buttonAdd">
          Add Task +
        </button>
      </div>
      <div className="listCard">
        {tasks.map((item) => {
          return <Listcard statusChange={handleStatus}  key={item.id} task={item} />
        })}
      </div>
    </>
  )
}

export default App
