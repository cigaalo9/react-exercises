export const initailState = [];
export const reducer = (state, action)=> {
    switch(action.type){
        case "add":
            return [...state, action.payload]
        case "completed":
            return state.map(item => item.id === action.payload ? {...item , complete : !item.complete} : item)
        case "delete":
            return state.filter(item => item.id !== action.payload)
        default:
            return state

    }
}
