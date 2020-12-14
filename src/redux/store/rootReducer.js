import { combineReducers } from 'redux';
import { articles as articlesReducer } from '../articlesTiles';

const rootReducer = combineReducers({
  articles: articlesReducer,
});

export default rootReducer;
