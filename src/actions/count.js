// Action types
export const INCREASE_COUNT = 'count/INCREASE_COUNT';
export const DECREASE_COUNT = 'count/DECREASE_COUNT';

export const SET_COUNT = 'count/SET_COUNT';

// Action creators
export const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  }
};

export const decreaseCount = () => {
  return {
    type: DECREASE_COUNT,
  }
};

export const setCount = () => {
  return {
    type: SET_COUNT,
  }
};

// Action creators for thunk
export const increaseCountAsyncThunk = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increaseCount());
  }, 1000);
};

export const decreaseCountAsyncThunk = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(decreaseCount());
  }, 1000);
};

// Action types for saga
export const INCREASE_COUNT_ASYNC = 'count/INCREASE_COUNT_ASYNC';
export const DEFREASE_COUNT_ASYNC = 'count/DECREASE_COUNT_ASYNC';

// Action creators for saga
export const increaseCountAsyncSaga = () => {
  return {
    type: INCREASE_COUNT_ASYNC,
  }
};

export const decreaseCountAsyncSaga = () => {
  return {
    type: DEFREASE_COUNT_ASYNC,
  }
}