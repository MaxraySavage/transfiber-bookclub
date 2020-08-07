import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SEARCH" actions
function* collectionSaga(action) {

  // yield console.log('======>collectionSaga', action.payload)
  try {
    const response = yield axios.get('/api/collection');
    // const response = yield axios.get('/api/search');
    // perform put to return data from server    
    yield put({type: 'SET_COLLECTION', payload: response.data});
  } catch (error) {
      console.log('Error with Collection get', error);
  }
}

function* removeFromCollectionSaga(action) {
  // yield console.log(`removing book_id: ${action.payload} from collection`)
  try {
    yield axios.delete('/api/collection/' + action.payload)
    yield put({type: 'FETCH_COLLECTION'});
  } catch (error) {
    console.log('Error deleting from collection', error);
  }
}


function* searchSaga() {
  yield takeLatest('FETCH_COLLECTION', collectionSaga);
  yield takeLatest('REMOVE_FROM_COLLECTION', removeFromCollectionSaga)
}

export default searchSaga;
