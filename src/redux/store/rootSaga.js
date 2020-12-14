import { all } from 'redux-saga/effects';
import { articlesSagaWatcher } from '../articlesTiles';

export default function* rootSaga() {
  yield all([
    articlesSagaWatcher(),
  ]);
}
