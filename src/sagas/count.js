import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';

import * as countActions from '../actions/count';

function* increaseCountAsync() {
  yield delay(1000);
  yield put({
    type: countActions.INCREASE_COUNT,
  });
}

function* decreaseCountAsync() {
  yield delay(1000);
  yield put({
    type: countActions.DECREASE_COUNT,
  });
}

function* watchCount() {
  yield takeEvery(countActions.INCREASE_COUNT_ASYNC, increaseCountAsync);
  yield takeEvery(countActions.DEFREASE_COUNT_ASYNC, decreaseCountAsync);
}

export default function* countSaga() {
  yield all([
    fork(watchCount),
  ])
};