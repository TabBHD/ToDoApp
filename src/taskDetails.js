import { useParams, Link, useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const {id} = useParams()
    const hestory = useNavigate()
    const {data:task, isLoading, error} = useFetch("http://localhost:8001/todo/"+id)

    const handleDelete = () =>{
        fetch("http://localhost:8001/todo/"+id,{
            method : "DELETE"
        }).then(()=>hestory("/"))
    }

    return ( 
        <div className="task-details">
            <h1>Taskss List</h1>
            {error && <h2>{error}</h2>}
            {/* {console.log(error)} */}
            {isLoading && <h2>Loading ...</h2>}
            {task && 
                <article>
                        <p>What are u supposing to do is : {task.description}</p>
                        <p>it's priority is : {task.priority}</p>
                        {task.done ? (<p style={{color:"green" }} >Done</p>):(<p style={{color:"red" }} > Not Done</p>)}
                    <nav className="btn-section">
                        <Link to={`/edit-task/${task.id}`} className="edit-link">Edit Task</Link>
                        <button onClick={()=>hestory("/")} className="home-btn">Home</button>
                        <button onClick={handleDelete} className="delete-btn">Delete</button>
                    </nav>
                    
                </article>
            }
            
        </div>
     );
}
 
export default TaskDetails;