export default function fetchUsers(state=null,action){
    if(action.type==="FETCH_SUCCEED"){
        return action.payload
    }
    return state
}