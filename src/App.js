import React, { Component } from 'react';
import MyName from './MyName';
import MyNameTwo from './MyNameTwo';
import Counter from './Counter';
//import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App"
      // 태그 사이에
      >
        {/* 주석은 이렇게 */}
        {/* <MyName name="리액트" /> */}
        <MyName />
        <MyNameTwo />
        <Counter />
      </div>
    );
  }
}

export default App;
