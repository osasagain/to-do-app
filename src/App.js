import React, {useState}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  //main  todo state
  const [toDo, setToDo] = useState([],
  );

  // temporary state

  const [newTask, setNewTask] = useState("");

  // function to add task
  const addTask = () =>{
     if(newTask){
      let num = toDo.length + 1;
      let newEntry = { id : num, title : newTask, status : false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
     }
      }


  // funtion to delete task
  const deleteTask = (id) =>{
    let newTasks = toDo.filter(task => task.id !==id)
    setToDo(newTasks);

  }

  // function for task completed
  const completeTask = (id) => {
    let newTask = toDo.map( task =>{
      if(task.id ===id){
        return({...task, status: ! task.status})
      }
      return task;
    })
    setToDo(newTask);
  }
 
  return (
    <div className=" container App">

      <br></br>
      <h2>OSAS TODO APP</h2>

      <p>Plan your day</p>
      <br></br>
   
    {/* Add Task */}
    <div className='row-addTask'>
      <div className='col-addTask'>
        <input 
        value={newTask}
        onChange = {(e)=>setNewTask(e.target.value)}
        className='input-addTask' placeholder='Add to do'/>
      </div>  
      <div className='col-auto'>
        <button 
        onClick={addTask}
        className='btn-addTask'> Add Task  
        </button>
      </div>
    </div>
    
      {/* display todo */}

      {toDo && toDo.length ? "" : "No Task..."}
      {toDo && toDo 
      .map((task, index)=>{
        return(
          <React.Fragment key={task.id}>
            <div className='=Col bgTask'>
              <div className={task.status ? "done" : ""}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{task.title}</span>
              </div>
              <div className='iconWrapper'>
                
                <span title='Completed / not Completed'
                onClick={(e)=>completeTask(task.id)}>
                  
                  <FontAwesomeIcon icon={faCircleCheck}/>
                </span>  
                <span title='Delete' 
                  onClick={()=>deleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrashCan}/>
                  </span>  
                                    
              </div>
            </div>
            
          </React.Fragment>
        )
      })

      }
    </div>
  );
}

export default App;
