import TodoApp from "./TodoApp";
import { initialState, reducer } from "./Reducer";
import  TodoContext from "./TodoContext";
import { useReducer } from "react";

function App(){
  const [state , dispatch] = useReducer(reducer , initialState);
  console.log(state);
  return (
    <TodoContext.Provider value={{state, dispatch}}>
        <div className=" min-h-screen flex bg-gradient-to-br from-orange-50 to-rose-100 justify-center items-start flex-start">
          <div className="bg-white  rounded-xl p-6 shadow-xl min-w-[450px] mt-32 ">
            <TodoApp />
          </div>
        </div>
    </TodoContext.Provider>
  )
}
export default App;