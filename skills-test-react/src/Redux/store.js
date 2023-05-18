import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import allReducers from './Reducers';
import rootSaga from './Sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;