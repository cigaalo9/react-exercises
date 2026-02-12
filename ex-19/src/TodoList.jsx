 import {useContext} from "react";
 import TodoContext from "./TodoContext";
 import TodoItem from "./TodoItem";
 import styles from "./TodoList.module.css";

function TodoList(){
    const {state, dispatch} = useContext(TodoContext);

    return (
        
            <div className={state.ItemsBox}>
            {
                state.length < 1 ? (
                    <p className={styles.isEmpty}>Your todo list is empty</p>
                ):(
            <ul className={styles.tasklist}>
                {
                    state.map(task=>(
                             <TodoItem key={task.id} task={task}/>
                    ))
                }
            </ul>)
            }
            </div>
    )
}

export default TodoList;