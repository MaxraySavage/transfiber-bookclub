import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SEARCH" actions
function* collectionSaga(action) {

  // yield console.log('======>collectionSaga', action.payload)
  try {
    const response = yield axios.get('/api/collection', {params: {search: action.payload}});
    // const response = yield axios.get('/api/search');
    // perform put to return data from server    
    yield put({type: 'SET_COLLECTION', payload: response.data});
  } catch (error) {
      console.log('Error with Collection get', error);
  }
}


function* searchSaga() {
  yield takeLatest('FETCH_COLLECTION', collectionSaga);
}

export default searchSaga;
