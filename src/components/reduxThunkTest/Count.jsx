import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/count';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localCount: 0,
    }
  }

  componentDidMount() {
    console.log('Component did mount.');
  }

  increaseCount = () => {
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount + 1,
      }
    });
  };

  decreaseCount = () => {
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount - 1,
      }
    });
  };

  render () {
    const { localCount } = this.state;
    const { storeCount,
            increaseStoreCount, decreaseStoreCount,
            increaseCountAsyncThunk, decreaseCountAsyncThunk,
            increaseCountAsyncSaga, decreaseCountAsyncSaga,
    } = this.props;

    return (
      <>
        {'Class component'}
        <div>
          <div>
            {`localCount: ${localCount}`}
          </div>
          <div>
            {`storeCount: ${storeCount}`}
          </div>
        </div>
        <div onClick={() => {
          this.increaseCount();
          increaseStoreCount();
        }}>
          {'+'}
        </div>
        <div onClick={() => {
          this.decreaseCount();
          decreaseStoreCount();
        }}>
          {'-'}
        </div>
        <div onClick={increaseCountAsyncThunk}>
          {'Increase count async thunk'}
        </div>
        <div onClick={decreaseCountAsyncThunk}>
          {'Decrease count async thunk'}
        </div>
        <div onClick={increaseCountAsyncSaga}>
          {'Increase count async saga'}
        </div>
        <div onClick={decreaseCountAsyncSaga}>
          {'Decrease count async saga'}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  storeCount: state.count.count,
});

const mapDispatchToProps = (dispatch) => ({
  increaseStoreCount: () => dispatch(actions.increaseCount()),
  decreaseStoreCount: () => dispatch(actions.decreaseCount()),
  increaseCountAsyncThunk: () => dispatch(actions.increaseCountAsyncThunk()),
  decreaseCountAsyncThunk: () => dispatch(actions.decreaseCountAsyncThunk()),
  increaseCountAsyncSaga: () => dispatch(actions.increaseCountAsyncSaga()),
  decreaseCountAsyncSaga: () => dispatch(actions.decreaseCountAsyncSaga()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);