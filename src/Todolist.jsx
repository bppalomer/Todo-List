import { useState } from "react";

function Todolist({ taskname }) {
  const [progress, setProgress] = useState("Start");
  const [showCard, setShowCard] = useState(true);


  function handleClick() {
    if (progress === "Start") {
        setProgress("In progress");
      } else if (progress === "In progress") {
        setProgress("Complete");
      }
        
    }

    function handleDelete() {
        setShowCard(false);
      }
    
      if (!showCard) {
        return null; 
      }

  return (
    <div className="card list_form shadow m-5">
      <div className="card-body">
        <p>
          Task: <span>{taskname}</span>
        </p>
        </div>
        <button onClick={handleClick} className="btn btn-primary  ms-5 me-5 mb-3" disabled={progress === "Complete"}>{progress} </button>
        <button onClick={handleDelete}className="btn btn-primary ms-5 me-5 mb-4">Delete</button>
      </div>
  );
}

export default Todolist;
