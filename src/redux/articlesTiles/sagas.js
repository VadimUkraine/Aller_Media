import {
  call, takeLatest, put, select,
} from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import {
  GET_ARTICLES_REQUEST,
  CHANGE_ARTICLE_TITLE_REQUEST,
  DELETE_ARTICLE_REQUEST,
} from './constants';
import {
  getArticlesRequestSuccess,
  getArticlesRequestFailure,
  changeArticleTitleRequestSuccess,
  changeArticleTitleRequestFailure,
  deleteArticleRequestSuccess,
  deleteArticleRequestFailure,
} from './actions';
import { articlesSelector } from './selectors';
import DataService from '../../global/api/service';
import { saveArticlesToLocalStorage, getArticlesFromLocalStorage } from './utils';

export function* getArticlesSaga() {
  try {
    const articlesFromLS = getArticlesFromLocalStorage();

    if (!articlesFromLS) {
      const res = yield call(DataService.fetchData);
      const dataWithId = res[0].map((item) => (
        item.columns.map((el) => ({ ...el, id: uuidv4() }))));
      yield put(getArticlesRequestSuccess(dataWithId));
      saveArticlesToLocalStorage(dataWithId);

    } else {
      yield put(getArticlesRequestSuccess(articlesFromLS));
    }

  } catch (err) {
    console.warn(err);
    yield put(getArticlesRequestFailure());
  }
}

export function* changeTitleSaga({ payload }) {
  try {
    const { id, title } = payload;
    const articles = yield select(articlesSelector);
    const newData = articles.map((item) => (
      item.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            title,
          };
        }
        return el;
      })
    ));
    yield put(changeArticleTitleRequestSuccess(newData));
    saveArticlesToLocalStorage(newData);

  } catch (err) {
    console.warn(err);
    yield put(changeArticleTitleRequestFailure());
  }
}

export function* deleteArticleSaga({ payload }) {

  try {
    const { id } = payload;
    const articles = yield select(articlesSelector);
    const newData = articles.map((item) => (
      item.map((el) => {
        if (el.id === id) {
          return null;
        }
        return el;
      }).filter(Boolean)
    ));
    yield put(deleteArticleRequestSuccess(newData));
    saveArticlesToLocalStorage(newData);
  } catch (err) {
    console.warn(err);
    yield put(deleteArticleRequestFailure());
  }
}

export function* articlesSagaWatcher() {
  yield takeLatest(GET_ARTICLES_REQUEST, getArticlesSaga);
  yield takeLatest(CHANGE_ARTICLE_TITLE_REQUEST, changeTitleSaga);
  yield takeLatest(DELETE_ARTICLE_REQUEST, deleteArticleSaga);
}
