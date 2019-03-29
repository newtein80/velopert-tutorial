import React, { Component } from 'react';
import MyName from './MyName';
import MyNameTwo from './MyNameTwo';
import Counter from './Counter';
import YourName from './YourName';
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
        <MyName name="강병현" />
        <MyNameTwo />
        <Counter />
        <YourName/>
      </div>
    );
  }
}

export default App;
