import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SEARCH" actions
function* getUsers(action) {
  try {
    const response = yield axios.get('/api/community');
    // get call to Google Books API with query from client
    // const response = yield axios.get('/api/search', {params: {search: action.payload}});
    // const response = yield axios.get('/api/search');
    // perform put to return data from server  
    // yield console.log('book posted');  
    yield put({type: 'SET_USERS', payload: response.data});
  } catch (error) {
      console.log('error getting users', error);
  }
}

function* communitySaga() {
  yield takeLatest('FETCH_USERS', getUsers);
  // yield takeLatest('ADD_TO_COLLECtiON', addToCollection)
}

export default communitySaga;
