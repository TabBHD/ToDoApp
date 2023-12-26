import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Search = () => {
    const [word, setWord] = useState(null)
    const [search, setSearch] = useState(null)
    const [difficulty, setDifficulty] = useState("")

    const hestory =useNavigate()

    const {data} = useFetch("http://localhost:8001/todo")



    useEffect(() => {
        if (data) {
            if (!word  && !difficulty) {
                // If the search input is empty, dont display any tasks
                setSearch("");
            } else {
                if (difficulty){
                    setSearch(
                        data
                        .filter((task) =>
                            task.priority === difficulty
                        )
                        .map((item) => (
                            <div className="task-preview" key={item.id}>
                                <div className={`task-preview-${item.priority}`} >
                                    <Link to={`/task/${item.id}`} >
                                        <fieldset > 
                                            <p className="todo">{item.description}</p>
                                            {item.done ? (<p style={{color:"green" }} className="done">Done</p>):(<p style={{color:"red" }} className="done"> Not Done</p>)}
                                        </fieldset>
                                    </Link>
                                </div>
                            </div>
                        ))
                    )
                    // console.log(search)
                }
                // If the search input is not empty, filter tasks based on the keyword
                else if(word){
                    setSearch(
                        data
                            .filter((task) =>
                                task.description.toLowerCase().startsWith(word)
                            )
                            .map((item) => (
                                <div className="task-preview" key={item.id}>
                                    <div className={`task-preview-${item.priority}`} >
                                        <Link to={`/task/${item.id}`} >
                                            <fieldset > 
                                                <p className="todo">{item.description}</p>
                                                {item.done ? (<p style={{color:"green" }} className="done">Done</p>):(<p style={{color:"red" }} className="done"> Not Done</p>)}
                                            </fieldset>
                                        </Link>
                                    </div>
                                </div>
                            ))
                    );
                    // console.log(search)

                }
            }
        }

    }, [difficulty,data, word]);


    const handleChange = (e) =>{
        setWord(e.target.value.toLocaleLowerCase())
    }

    const handleDifficulty = (e) =>{
        setDifficulty(e.target.value)
    }

    return ( 
        <div className="search">
            <h1>Search for Tasks</h1>
            <label htmlFor="">Search For a Task</label>
            <input type="text" onChange={handleChange} placeholder="Task description"/>
            <select name="" id="" onChange={handleDifficulty} value={difficulty}>
                <option value="">Select an option ..</option>
                <option value="hard">Hard</option>
                <option value="normal">Normal</option>
                <option value="easy">Easy</option>
            </select>
            {search}
            <button className="home-btn" onClick={()=>hestory("/")}>Home</button>
        </div>
     );
}
 
export default Search;

// I really hope that I will get the job and help the company by adding to what is expected of me and developing myself