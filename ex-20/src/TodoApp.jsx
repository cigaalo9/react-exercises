import {useState ,useContext} from "react";
import TodoContext from "./TodoContext";
import TodoList from "./TodoList";
function TodoApp(){
    const { dispatch} =  useContext(TodoContext);
    const [text , setText] = useState("");

    function handleAdd(){
        if(!text.trim() == ""){
            const task ={
                id: Date.now(),
                text,
                complete: false
            }
            dispatch({type: "add" , payload: task});
            setText("");
        }
    }
    return(
        <div className="">
            <h1 className="text-4xl font-bold text-gray-900 uppercase text-center   font-[times-news-roman]">Todo List</h1>
            <div className="flex justify-between gap-4 my-8">
                <input className="border outline-none text-lg  text-black border-gray-900 py-1 px-2  flex-1 rounded capitalize  font-medium font-[times-news-roman]" 
                onChange={(e)=> setText(e.target.value)}
                type="text" placeholder="Enter Your Task"
                value={text}
                />
                <button 
                onClick={handleAdd}
                className="bg-[#990efa] px-4 rounded text-2xl text-white cursor-pointer  font-light font-[times-news-roman]">Add</button>
            </div>
            <TodoList />
        </div>
    )
}
export default TodoApp;