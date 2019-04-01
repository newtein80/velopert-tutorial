import React, { Component } from 'react';

class SetStateTestOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '기본이름',
            number: 0,
            foo: 'bar'
        }

        this.handleSetFoo = this.handleSetFoo.bind(this);
    }

    handleSetFoo() {
        this.setState({
            number: 2
        });
    }

    render() {
        return (
        <div>
            <h3>Set State Test One</h3>
            static defaultProps.name: <b>{this.state.name}</b><br></br>
            static defaultProps.number: <b>{this.state.number}</b><br></br>
            static defaultProps.foo: <b>{this.state.foo}</b><br></br>
            <button onClick={this.handleSetFoo}>SetFoo</button>
        </div>
        );
    }
}

export default SetStateTestOne;