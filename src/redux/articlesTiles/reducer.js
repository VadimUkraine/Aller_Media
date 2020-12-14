import {
  GET_ARTICLES_REQUEST_SUCCESS,
  GET_ARTICLES_REQUEST_FAILURE,
  CHANGE_ARTICLE_TITLE_SUCCESS,
  CHANGE_ARTICLE_TITLE_FAILURE,
  DELETE_ARTICLE_REQUEST_SUCCESS,
  DELETE_ARTICLE_REQUEST_FAILURE,
} from './constants';

const INITIAL_STATE = {
  items: [],
  error: false,
  isLoading: true,
};

export const articles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        isLoading: false,
        error: false,
      };
    case GET_ARTICLES_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case CHANGE_ARTICLE_TITLE_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
      };
    case CHANGE_ARTICLE_TITLE_FAILURE:
      return {
        ...state,
        error: true,
      };
    case DELETE_ARTICLE_REQUEST_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
      };
    case DELETE_ARTICLE_REQUEST_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default articles;
