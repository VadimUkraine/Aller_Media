import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];
  const enhancers = [];

  if (window?.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }


  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
