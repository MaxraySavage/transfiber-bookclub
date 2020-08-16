import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SEARCH" actions
function* searchApi(action) {
  try {
    // get call to Google Books API with query from client
    const response = yield axios.get('/api/book', {params: {search: action.payload}});
    // perform put to return data from server    
    yield put({type: 'SET_SEARCH_RESULTS', payload: response.data.items});
  } catch (error) {
      console.log('Error with API get', error);
  }
}

// searches local database for matches
function* searchDatabase(action) {
  try {
    const response = yield axios.get('/api/book/db', {params: {search: action.payload}});
    yield put({type: 'SET_DB_RESULTS', payload: response.data})
  } catch (error) {
    console.log('Error with DB get', error);
  }
}

function* searchSaga() {
  yield takeLatest('SEARCH_API', searchApi);
  yield takeLatest('SEARCH_DB', searchDatabase);
}

export default searchSaga;
