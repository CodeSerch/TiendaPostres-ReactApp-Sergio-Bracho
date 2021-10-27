import React, { Component } from 'react';


function Login() {
    return (
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout() {
    return (
        <div>
            <h3>Logout</h3>
        </div>
    )
}

class ItemListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            session: false,
        };
    }
    handleClick() {
        if (this.state.session == false){
            this.setState({
                session: true
              });
        } else {
            this.setState({
                session: false
              });
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}> {this.state.session ? <Login /> : <Logout />}
                </button>
            </div>
        );
    }
}

export default ItemListContainer;
