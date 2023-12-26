import { useState } from "react";

const CreateTask = () => {
    const [description, setDescription] = useState()


    const submiteHandler = (e) =>{
        e.preventDefault()
        console.log(description)
        const priority = "normal"
        const done = false
        const task = {description, priority, done}

        fetch("http://localhost:8001/todo", {
            method:"POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(task)
        }).then(()=>{
            window.location.href = "/"
        })
    }
    return ( 
        <div className="create-task">
            <input type="text" placeholder="New Task ..." onChange={(e)=>setDescription(e.target.value)}/>
            <button onClick={submiteHandler}>Add</button>

        </div>
     );
}
 
export default CreateTask;