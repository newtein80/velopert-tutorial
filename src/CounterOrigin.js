import React, { Component } from 'react';

class CounterOrigin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease() {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease() {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <h3>Counter Origin</h3>
                <div>State.Number: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default CounterOrigin;