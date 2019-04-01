import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <h3>Phone Form One</h3>
                <form>
                    <input
                        placeholder="이름"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <div>{this.state.name}</div>
                </form>
            </div>
        );
    }
}

export default PhoneForm;