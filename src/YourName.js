import React, { Component } from 'react';

class YourName extends Component {
    // static defaultProps = {
    //     name: '기본이름'
    // }

    render() {
        return (
        <div>
            <h3>Your Name</h3>
            YourName.defaultProps: <b>{this.props.name}</b>
        </div>
        );
    }
}

YourName.defaultProps = {
    name: 'YourName'
};

export default YourName;