import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
    const {id} = useParams()
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [done, setDone] = useState("")
    const [isPending, setIsPending] = useState(false)

    const hestory = useNavigate()

    const{data, isLoading, error} = useFetch("http://localhost:8001/todo/" + id)

    useEffect(()=>{
        if(data){
            setDescription(data.description)
            setPriority(data.priority)
            setDone(data.done)
        }
    },[data])

    const submitHandler = (e) =>{
        e.preventDefault()
        const task = {description, priority, done}
        setIsPending(true)
        
        fetch("http://localhost:8001/todo/" + id,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        }).then(() => {
            setIsPending(false);
            // Redirect or handle the success state as needed
            hestory("/")
        })
        .catch((error) => {
            setIsPending(false);
            console.error('Error:', error);
            // Handle errors
        });}

    

    return ( 
        <div className="edit-task">
            <h1>Modify Your Task </h1>
            {error && <h2>{error}</h2>}
            {/* {console.log(error)} */}
            {isLoading && <h2>Loading ...</h2>}
            {data && 
                <form onSubmit={submitHandler} className="task-form">
                    <label htmlFor="">description : </label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <label htmlFor="">Choose the level of priority : </label>
                    <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                        <option value="hard" >Hard</option>
                        <option value="normal">Normal</option>
                        <option value="easy">Easy</option>
                    </select>
                    <label className="edit-done">Done :</label>
                    <input type="checkbox" onChange={()=>setDone(!done)} checked={done}/>
                    
                    {!isPending &&<button className="edit-btn">Edit Task</button>}
                    {isLoading && <button>Editing Task ..</button>}
                </form>
            }
        </div>
     );
}
 
export default EditTask;