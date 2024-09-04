
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cartReducer from './reducer/cartReducer';
// import cartSaga from './sagas/cartSaga';
import rootSaga from './sagas/index';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
