import { compile } from "tailwindcss";

export const initialState = [];
export const reducer = (state , action)=>{
        switch(action.type){
            case 'add':
                return [...state , action.payload]
            case 'delete':
                return state.filter(task => task.id !== action.payload)
            case 'complete':
                return state.map(task => task.id == action.payload ? {...task , complete: !task.complete}: task);
            default:
                return state
        }
}