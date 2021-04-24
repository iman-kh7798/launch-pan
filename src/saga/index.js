import { all, call, takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'
let data;
function* fetchData() {
    const table= document.getElementById('users')
    data = yield axios.get('https://60742776066e7e0017e79335.mockapi.io/users')
    yield put({ type: "FETCH_SUCCEED", payload: data.data })
    yield data.data.forEach((element,index) => {  
        if( index >= 25){
            return
        } 
        const row = document.createElement('tr')
        const first_name = document.createElement('td')
        first_name.innerText=element.first_name
        const email = document.createElement('td')
        email.innerText=element.email
        const id = document.createElement('td')
        id.innerText=element.id
        row.appendChild(id)
        row.appendChild(first_name)
        row.appendChild(email)
        row.setAttribute('key',element.id)
        table.appendChild(row)
        });
        yield console.log(data.data)
}
function* watcher() {
    yield takeLatest('FETCH_DATA', fetchData)
}
function* testSaga() {
    yield console.log('salm')
}
export default function* allGenerators() {
    const [first, second] = yield all([
        call(watcher)
        , call(testSaga)
    ])
}