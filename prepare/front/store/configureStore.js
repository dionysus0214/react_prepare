import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSageMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({dispatch, getState}) => (next) => action => {
  console.log(action);
  return next(action);
}

const configureStore = () => {
  const sageMiddleware = createSageMiddleware();
  const middelwares = [sageMiddelware, loggerMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middelwares))
    : composeWithDevTools(applyMiddleware(...middelwares))
  const store = createStore(reducer, enhancer);
  store.sagaTask = sageMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;