import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const create = (reducers) => {
  return createStore(reducers, applyMiddleware(ReduxThunk));
}

export default create;
