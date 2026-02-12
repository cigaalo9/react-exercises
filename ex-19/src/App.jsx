import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { initailState, reducer } from "./Reducer";
import TodoApp from "./TodoApp";
import TodoList from "./TodoList";
import Styles from "./TodoList.module.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initailState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className={Styles.TodoContainer}>
        <div className={Styles.TodoBox}>
          <TodoApp />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
