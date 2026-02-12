import React , {useState, useContext} from 'react'
import TodoContext from "./TodoContext";
import Styles from  "./TodoList.module.css"
function TodoApp() {
    const [text , setText] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleAdd =()=>{
      if(text.trim()){
          const task = {
            id : Date.now(),
            text ,
            complete : false
        }
        dispatch({type: "add" , payload: task})
        setText("");
      }
    }
  return (
    <div className={Styles.TodoAppBox}>
        <h1>Todo List</h1>
        <div className={Styles.todoTask}>
          <input  type="text" 
        placeholder="Enter Your Task"
        value={text}
        onChange={(e)=> setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        </div>
        
    </div>

  )
}

export default TodoApp