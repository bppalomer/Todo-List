import {useState} from "react"

function Todoform ({addTask}) {
    const [task, setTask] = useState({
        task: ''
    })

    const taskChange = (text) => {
        setTask((prevTask) => ({
            ...prevTask,
            task: text.target.value
        }));
    };

    const newTask = (e) => {
        e.preventDefault();
        addTask(task);
    };

    return (
        <>
        <form className="todo_form">
          <div className="mb-3">
            <h1 className="mb-4 mt-5">What is your task today?</h1>
              
            <input
              type="text"
              id="TextInput"
              className="form-control"
              placeholder="Enter Task "
              onChange={taskChange}
            />
          </div>
          <div className="justify-content-center text-center">
            <button onClick={newTask} className="btn btn-primary me-4">
              Add Task
            </button>
        </div>
        </form>
        </>
        
    );
}

export default Todoform