import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_REQUEST_SUCCESS,
  GET_ARTICLES_REQUEST_FAILURE,
  CHANGE_ARTICLE_TITLE_REQUEST,
  CHANGE_ARTICLE_TITLE_SUCCESS,
  CHANGE_ARTICLE_TITLE_FAILURE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_REQUEST_SUCCESS,
  DELETE_ARTICLE_REQUEST_FAILURE,
} from './constants';

export const getArticlesRequest = () => ({ type: GET_ARTICLES_REQUEST });

export const getArticlesRequestSuccess = (data) => ({
  type: GET_ARTICLES_REQUEST_SUCCESS,
  payload: { data },
});

export const getArticlesRequestFailure = () => ({ type: GET_ARTICLES_REQUEST_FAILURE });

export const changeArticleTitleRequest = ({ id, title }) => ({
  type: CHANGE_ARTICLE_TITLE_REQUEST,
  payload: { id, title },
});

export const changeArticleTitleRequestSuccess = (data) => ({
  type: CHANGE_ARTICLE_TITLE_SUCCESS,
  payload: { data },
});

export const changeArticleTitleRequestFailure = () => ({ type: CHANGE_ARTICLE_TITLE_FAILURE });

export const deleteArticleRequest = (id) => ({
  type: DELETE_ARTICLE_REQUEST,
  payload: { id },
});

export const deleteArticleRequestSuccess = (data) => ({
  type: DELETE_ARTICLE_REQUEST_SUCCESS,
  payload: { data },
});

export const deleteArticleRequestFailure = () => ({ type: DELETE_ARTICLE_REQUEST_FAILURE });
