import React, { Component } from 'react';

class SetStateTestTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '기본이름',
            number: 0,
            foo: {
                bar: 0,
                foobar: 1
            }
        }

        this.handleSetFoo = this.handleSetFoo.bind(this);
    }

    handleSetFoo() {
        this.setState({
            name: '변경이름',
            number: 0,
            foo: {
                ...this.state.foo,
                foobar: 2
            }
        });
    }

    render() {
        return (
        <div>
            <h3>Set State Test Two</h3>
            static defaultProps.name: <b>{this.state.name}</b><br></br>
            static defaultProps.number: <b>{this.state.number}</b><br></br>
            static defaultProps.foo: <b>{this.state.foo.foobar}</b><br></br>
            <button onClick={this.handleSetFoo}>SetFoo</button>
        </div>
        );
    }
}

export default SetStateTestTwo;