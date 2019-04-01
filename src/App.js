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
import CounterExceptionTest from './CounterExceptionTest';
import PhoneForm from './components/PhoneForm';
import PhoneFormTwo from './components/PhoneFormTwo';
import PhoneFormThree from './components/PhoneFormThree';
//import './App.css'

class App extends Component {
  handleCreate = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        className="App"
        // 태그 사이에
      >
        {/* 주석은 이렇게 */}
        {/* <MyName name="리액트" /> */}
        <PhoneFormThree onCreate={this.handleCreate} />
        <PhoneFormTwo/>
        <PhoneForm />
        <CounterExceptionTest />
        <SetStateTestThree />
        <MyName />
        <MyName name="강병현" />
        <MyNameTwo />
        <MyNameThree />
        <Counter />
        <YourName />
        <CounterOrigin />
        <SetStateTestOne />
        <SetStateTestTwo />
      </div>
    );
  }
}

export default App;
