import Navbar from "./NabBar";
import EditTask from "./editTask";
import NotFound from "./notFound";
import Search from "./search";
import TaskDetails from "./taskDetails";
import TaskList from "./tasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="todo-app">
      <div className="content">
          <Routes>
            <Route path="/" element={<><Navbar/><TaskList/></>} />
            <Route path="/task/:id" element={<TaskDetails/>}/>
            <Route path="/edit-task/:id" element={<EditTask/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
     
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
