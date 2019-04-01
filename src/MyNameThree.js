import React, { Component } from 'react';

class MyNameThree extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    render() {
        return (
        <div>
            <h3>My Name Three</h3>
            static defaultProps.name: <b>{this.props.name}</b>
        </div>
        );
    }
}

export default MyNameThree;