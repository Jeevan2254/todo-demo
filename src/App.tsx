import "./App.css";
import { useState, ChangeEvent } from "react";
import {ITask} from "./interfaces"
import Downs from "./Downs";

function App() {
  const [task,setTask]=useState<string>("")
  const [deadline,setDeadline]=useState<number>(0)
  const [todo,setTodoList]=useState<ITask[]>([])

  const addTodos = (event: ChangeEvent <HTMLInputElement>):void => {
      if(event.target.name === "task"){
        setTask(event.target.value)
      }else{
        setDeadline(Number(event.target.value))
      }
  }

  const addTask=():void =>{
    const newTask = {taskName :task , deadLine : deadline}
    setTodoList([...todo,newTask])
    //console.log(todo);
    setTask("")
    setDeadline(0)
  }

  const completeTask=(taskNameToDelete :string) :void=>{
      setTodoList(todo.filter((task)=>{
        return task.taskName != taskNameToDelete
      }))
    };

  return (
    <div className="App">
      <div className="app-sec-div">
        
          <h3>Enter todo</h3>
          <input type="text" value={task} className="inputform1" name="task" onChange={addTodos} placeholder="type todo" />
          <h3>Enter deadline</h3>
          <input type="number" value={deadline} className="inputform1" name="deadline" onChange={addTodos} />
          <button className="add-todo-btn" onClick={addTask} >
            Add todo
          </button>
          <div>
            {todo.map((task:ITask, key:number)=>{
              return <Downs key={key} task={task} completeTask={completeTask}/>;
             })}
          </div>
        
      </div>
      
    </div>
  );
}

export default App;
