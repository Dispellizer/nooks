import React, { useState } from "react";

// Hook ver
const App = () => {
  const [item, setItem] = useState(1);
  // item은 초기값, setItem은 변경할 값 useState()에 들어가는것이 초기값이된다.
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

// Class component ver
class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default App;
