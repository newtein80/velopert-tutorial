import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    // return (
    //     <div>

    //     </div>
    // );
};

class CounterExceptionTest extends Component {
    state = {
        number: 0,
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    handleCombine = () => {
        this.setState({
            number: this.state.number * 2
        });
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        if (this.state.error) return (<h1>에러발생!</h1>);
        
        return (
            <div>
                <h3>Counter Exception Test</h3>
                <div>State.Number: {this.state.number}</div>
                { this.state.number === 4 && <Problematic /> }
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.handleCombine}>*</button>
            </div>
        );
    }
}

export default CounterExceptionTest;