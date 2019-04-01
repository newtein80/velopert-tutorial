import React, { Component } from 'react';
import MyName from './MyName';
import MyNameTwo from './MyNameTwo';
import MyNameThree from './MyNameThree';
import Counter from './Counter';
import YourName from './YourName';
import CounterOrigin from './CounterOrigin';
import SetStateTestOne from './SetStateTestOne';
import SetStateTestTwo from './SetStateTestTwo';
import SetStateTestThree from './SetStateTestThree';
//import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App"
      // 태그 사이에
      >
        {/* 주석은 이렇게 */}
        {/* <MyName name="리액트" /> */}
        <SetStateTestThree/>
        <MyName />
        <MyName name="강병현" />
        <MyNameTwo />
        <MyNameThree/>
        <Counter />
        <YourName/>
        <CounterOrigin/>
        <SetStateTestOne/>
        <SetStateTestTwo/>
      </div>
    );
  }
}

export default App;
