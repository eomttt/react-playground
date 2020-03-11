import { all, fork } from 'redux-saga/effects';

import count from './count';

export default function* rootSaga() {
  yield all([
    fork(count),
  ]);
}
