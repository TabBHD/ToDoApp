import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import CreateTask from "./createTask";

const TaskList = () => {
    const {data, error, isLoading} = useFetch("http://localhost:8001/todo")

    return ( 
        
        <div className="tasks-list">
                    <CreateTask/>

            <h1>Tasks List</h1>
            {error && <h2>{error}</h2>}
            {/* {console.log(error)} */}
            {isLoading && <h2>Loading ...</h2>}
            
            {data && 
                data.map((task)=>
                <div className="task-preview" key={task.id}>
                    <div className={`task-preview-${task.priority}`} >
                        <Link to={`/task/${task.id}`} >
                            <fieldset > 
                                {/* <legend>TASK {task.id}</legend> */}
                                <p className="todo">{task.description}</p>
                                {task.done ? (<p style={{color:"green" }} className="done">Done</p>):(<p style={{color:"red" }} className="done"> Not Done</p>)}
                            </fieldset>
                        </Link>
                    </div>
                </div>
                    
                )
                
            }
        </div>
     );
}
 
export default TaskList;