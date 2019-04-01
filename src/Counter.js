import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleCombine = () => {
        this.setState({
            number: this.state.number * 2
        });
    }

    // handleIncrease = () => {
    //     this.setState({
    //         number: this.state.number + 1
    //     });
    // }
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    // handleDecrease = () => {
    //     this.setState({
    //         number: this.state.number - 1
    //     });
    // }
    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        console.log('render');
        return (
            <div>
                <h3>Counter</h3>
                <div>State.Number: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.handleCombine}>*</button>
            </div>
        );
    }
}

export default Counter;