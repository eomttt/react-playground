import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localCount: 0,
    }
  }

  componentDidMount() {

  }

  increaseCount = () => {
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount + 1,
      }
    })
  };

  decreaseCount = () => {
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount - 1,
      }
    })
  };

  render () {
    const { localCount } = this.state;

    return (
      <>
        <div>
          {`localCount: ${localCount}`}
        </div>
        <div onClick={this.increaseCount}>
          {'+'}
        </div>
        <div onClick={this.decreaseCount}>
          {'-'}
        </div>
      </>
    )
  }
}

export default Count;