import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    useEffect(() => {
        dispatch({ type: 'FETCH_DATA' })

    }, [])


    return (
        <div>
            <table >
                <thead>
                <tr>
                    <th>number</th>
                    <th>first_name</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody id='users'></tbody>
            </table>
            {/* <button type="text" onClick={handleClick}>fetchData</button> */}

        </div>
    );
};

export default App;