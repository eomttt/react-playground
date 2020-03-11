import * as countActions from '../actions/count';

const initialStates = {
  count: 0,
}

const reducers = (state = initialStates, action) => {
  const { type } = action;
  switch (type) {
    case countActions.INCREASE_COUNT: {
      return {
        ...state,
        count: state.count +1
      }
    }
    case countActions.DECREASE_COUNT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    case countActions.INCREASE_COUNT_ASYNC: {
      return {
        ...state,
      }
    }
    case countActions.DEFREASE_COUNT_ASYNC: {
      return {
        ...state,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducers;
