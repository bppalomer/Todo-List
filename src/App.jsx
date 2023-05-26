import { useState } from "react";
import Todolist from "./Todolist";
import Todoform from "./Todoform";


function App() {

  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask((prevTask) => [
      ...prevTask, newTask
    ]);
  };

  const renderedTask = task.map((tasks) =>(
    <Todolist
        taskname={tasks.task}
    />
  ))
  return (
    <>
      <div className="container mt-5 p-5 border rounded">
        <div className="text-center">
          <h1>Todo List</h1>
        </div>
        <div>
          <Todoform addTask={addTask} />
        </div>
        {renderedTask}
      </div>
    </>
    
  );
}

export default App;
