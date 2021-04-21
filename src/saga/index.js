import {all,call,takeLatest,put} from 'redux-saga/effects'
import axios from 'axios'
let data;
function* fetchData(){
data = yield call(
    axios.get('https://60742776066e7e0017e79335.mockapi.io/users'))
yield put({type:"FETCH_SUCCEED",payload:data})
}
function* watcher(){
    yield takeLatest('FETCH_DATA',fetchData)
}

export default function* allGenerators(){
    yield all([
        watcher
    ])
}