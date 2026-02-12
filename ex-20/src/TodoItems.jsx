import React , {useContext} from 'react'
import TodoContext from './TodoContext'

function TodoItems({ task }) {
    const {state, dispatch} = useContext(TodoContext);
    return (
        <li className='flex justify-between items-center rounded py-3 px-2 bg-[#f3f5f7] '>
            <div className='flex items-center '>
                <input className='w-6 h-4.5 mr-2 accent-blue-600 border-gray-300 rounded focus:outline-none ' type="checkbox" 
                onChange={()=> dispatch({type:"complete" , payload : task.id})}
                />
                <span className={`text-[21px]  ${task.complete ? "line-through text-gray-400" : "none"}  font-light font-[times-news-roman]`}>{task.text}</span>
            </div>
            <button 
            onClick={()=> dispatch({type: "delete" , payload: task.id})}
            className='text-[21px] text-red-700 font-light font-[times-news-roman]'>delete</button>
        </li>
    )
}

export default TodoItems