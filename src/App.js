import './App.css';
import { useState } from 'react'
function App() {
  const [todos, settodos] = useState([])
  const [todo, settodo] = useState('')
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let date = new Date()
  let today = days[date.getDay()]
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br/>

        <h2>Whoop, it's {today} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          if (todo.trim() !== '') {
            settodos([...todos, { id: Date.now(), text: todo, status: false, deletedstatus:false }])
            settodo('')
          }
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <h1>Active Tasks</h1>
        {todos.map((value) => {
          return (<div className="todo">
            <div className="left">
              <input value={value.status} onChange={(e) => {
                settodos(todos.filter(obj => {
                  if (obj.id === value.id) {
                    obj.status = e.target.checked
                  }
                  return obj
                }))

              }} type="checkbox" name="" id="" />
              <p>{value.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => settodos(todos.filter((obj) => {
                if(obj.id === value.id){
                  obj.deletedstatus = true
                }
                return (obj.id !== value.id)
              }))}></i>
            </div>

          </div>)
        })}
        <h1>Completed Tasks</h1>
        {todos.map((value) => {
          if (value.status) {
            return (<h2>{value.text}</h2>)
          }
          return null
        })}

      </div>
    </div>
  );
}

export default App;