import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SEARCH" actions
function* addBook(action) {
  try {
    yield axios.post('/api/search', action.payload);
    // get call to Google Books API with query from client
    // const response = yield axios.get('/api/search', {params: {search: action.payload}});
    // const response = yield axios.get('/api/search');
    // perform put to return data from server  
    yield console.log('book posted');  
    // yield put({type: 'SET_SEARCH_RESULTS', payload: response.data.items});
  } catch (error) {
      console.log('error adding book', error);
  }
}

function* addBookSaga() {
  yield takeLatest('ADD_BOOK', addBook);
}

export default addBookSaga;
