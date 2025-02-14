import './App.css';
import { useState } from "react";

function App() {
  const [task, setTask] = useState([ "task 1", "task 2", "task 3", "task 4" ]);
  
  const [val, setVal] = useState ("")

  const dltBtn = (index)=> {
  const copy = [...task] // Copy the array
  copy.splice(index , 1) // Remove the item from the array
  setTask(copy) 
   } 

const addVal = () => {
  if (val) {
    setTask([  ...task, val ]);
    setVal(""); // Clear input value after adding
  }
};

  return (
    <div className='mainDiv'>    
     <ul> 
     { task.map((items , index)=>(
          <li key={index}> 
          {items}
          <button onClick={ ()=> dltBtn(index)}>
          Delete
          </button>
         </li>
        ))} 
        <div>
        <input className='border' 
        value={val} // This binds the input field value to the `val` state I moved setVal('') outside of the array in addVal() so that it correctly resets the input value after the new task is added.
        
        // I added value={val} to the input so it’s controlled by React (which is a good practice for input fields). This way, when val is updated, the input reflects the new state.
        //I added a check if (val) to prevent adding an empty task.
        
         onChange={ (e)=> setVal(e.target.value)} />
        <button onClick={addVal}> adding val</button>
        </div>
      </ul > 
    </div>
  );
}

export default App;



















// import './App.css';
// import { useState } from "react";

// function App() {
//   const [task, setTask] = useState([
//     "task 1",
//     "task 2",
//     "task 3",
//     "task 4"
//   ]);
//   const [val, setVal] = useState ("")

//   const dltBtn = (index)=> {
//   const copy = [...task] // Copy the array
//   copy.splice(index , 1) // Remove the item from the array
//   setTask(copy) 
// } 
// const addVal = () => {
//   if (val) {
//     setTask([
//       ...task,
//       val,
//     ]);
//     setVal(""); // Clear input value after adding
//   }
// };

//   return (
//     <div className='mainDiv'>    
//      <ul> {
//         task.map((items , index)=>(
//           <li key={index}> 
//           {items}
//           <button onClick={ ()=> dltBtn(index)}>
//           Delete
//           </button>
//          </li>
//         ))
//       } 
//         <div>
//         <input className='border' 
//         value={val} // This binds the input field value to the `val` state I moved setVal('') outside of the array in addVal() so that it correctly resets the input value after the new task is added.
        
//         // I added value={val} to the input so it’s controlled by React (which is a good practice for input fields). This way, when val is updated, the input reflects the new state.
//         //I added a check if (val) to prevent adding an empty task.
        
//          onChange={ (e)=> setVal(e.target.value)} />
//         <button onClick={addVal}> adding val</button>
//         </div>
//       </ul > 
//     </div>
//   );
// }

// export default App;















// import './App.css';
// import { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [taskArray, setTaskArray] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (event) => {
//     setTask(event.target.value);
//   };

//   const handleTaskSubmit = () => {
//     if (task.trim() === "") return; // Prevent adding empty tasks

//     if (editIndex !== null) {
//       const updatedTasks = taskArray.map((item, index) =>
//         index === editIndex ? task : item
//       );
//       setTaskArray(updatedTasks);
//       setEditIndex( ); // Reset edit index
//     } else {
//       setTaskArray([...taskArray, task]);
//     }
    
//     setTask(""); // Clear the input field
//   };

//   const handleTaskRemove = (index) => {
//     const filteredTasks = taskArray.filter((_, i) => i !== index);
//     setTaskArray(filteredTasks);
//   };

//   const handleTaskEdit = (index) => {
//     setTask(taskArray[index]); // Set the current task to the value at the specified index
//     setEditIndex(index); // Set the edit index to the specified index
//   };

//   return (
//     <div className='mainDiv'>

//       <h2 > {editIndex !== null ? "Editing Task" : "Add New Task"}</h2>
//       <input
//       className='abc'
//         value=  {task }
//         placeholder='Enter your task here'
//         onChange={handleInputChange}
//       /> 
//       <div>
//       <button onClick={handleTaskSubmit}>Submit Task</button>
//         {taskArray.map((e, i) => (
//           <div key={i} style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
//             <h3>{e}</h3>
//             <button onClick={() => handleTaskEdit(i)}>Edit</button>
//             <button onClick={() => handleTaskRemove(i)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;














 



// import './App.css';

// import { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [taskArray, setTaskArray] = useState([]);

//   const addTaskArray = () => {
//     if (task.trim() !== "") {
//       setTaskArray([...taskArray, task]);
//       setTask('');
//     }
//   };

//   const getTaskInput = (e) => {
//     setTask(e.target.value);
//   };

//   const removeHandler = (index) => {
//     const filterData = taskArray.filter((_, i) => i !== index);
//     setTaskArray(filterData);
//   };

//   return (
//     <div className='mainDiv'>
//       <div className='input' style={{ display: 'flex' }}>
//         <input
//           type="text"
//           placeholder="TaskApp"
//           value={task}
//           onChange={getTaskInput}
//         />
//         <button onClick={addTaskArray}>Add</button>
//       </div>
//       <div style={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
//         {taskArray.map((e, i) => (
//           <div key={i}>
//             <hr />
//             <h3>{e}</h3>
//             <button onClick={() => removeHandler(i)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




