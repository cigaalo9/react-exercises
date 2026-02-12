import {useContext} from "react";
import TodoContext from "./TodoContext";
import styles from "./TodoList.module.css"

function TodoItem({task}){
    const {dispatch} = useContext(TodoContext);

    function handleChange (e){
        const checked = e.target;
        if(checked){
            dispatch({type: "completed" , payload: task.id})
        }
    }
    return (
        <li class>
            <div className={styles.listItem}>
            <input className={styles.completeInput} type="checkbox" onChange={handleChange}/>
            <span className={task.complete ? styles.completed : styles.incomplete}>{task.text}</span>
            </div>
            <button className={styles.delteItem} 
            onClick={()=> dispatch({type:"delete" , payload: task.id})}>Delete</button>
        </li>
    )
}
export default TodoItem;