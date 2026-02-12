import React , {useContext} from 'react'
import TodoContext from './TodoContext';
import TodoItems from './TodoItems';

function TodoList() {
    const {state, dispatch} = useContext(TodoContext);
  return (
    <div>
        {
            state.length < 1 ? (
                <p className='text-xl text-red-500 text-center  font-light font-[times-news-roman]'>We Dont Have Any Task</p>
            ):(
                <ul className='flex flex-col gap-2'>
                    {
                        state.map(task => (
                            <TodoItems  key={task.id} task={task}/>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default TodoList