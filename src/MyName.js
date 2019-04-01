import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
        <div>
            <h3>My Name</h3>
            MyName.defaultProps: <b>{this.props.name}</b>
        </div>
        );
    }
}

MyName.defaultProps = {
    name: '기본이름'
};

export default MyName;