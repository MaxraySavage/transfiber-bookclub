import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// worker Saga: will be fired on "SEARCH" actions
function* getDetails(action) {
  try {
    // get call to Google Books API with query from client
    yield console.log('in getDetails:', action.payload)
    // const response = yield axios.get(`/api/book/details/${action.payload}`);

    // perform put to return data from server    
    yield put({type: 'SET_RESULT_DETAILS', payload: action.payload});
  } catch (error) {
      console.log('Error with Details get', error);
  }
}

function* detailsSaga() {
  yield takeLatest('DETAILS', getDetails);
}

export default detailsSaga;
