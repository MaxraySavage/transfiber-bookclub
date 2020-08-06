import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SEARCH" actions
function* searchBooks(action) {
  try {
    // get call to Google Books API with query from client
    const response = yield axios.get('/api/search', {params: {search: action.payload}});

    // perform put to return data from server    
    yield put({type: 'SET_SEARCH_RESULTS', payload: response.data.items});
  } catch (error) {
      console.log('Error with get', error);
  }
}

function* searchSaga() {
  yield takeLatest('SEARCH', searchBooks);
}

export default searchSaga;
