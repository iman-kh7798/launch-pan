import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
const App = () => {
    const dispatch=useDispatch()
    const data= useSelector(({users})=>users)
    return (
        <div>
            <button type="text" onClick={()=>{
                console.log(data)
                dispatch({type:"FETCH_DATA"})
            }}>fetchData</button>
        </div>
    );
};

export default App;