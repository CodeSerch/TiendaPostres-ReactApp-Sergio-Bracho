import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Greeting extends Component {
  state = {
    fullname: '',
  }

  stateChange = (f) => {
    const {name, value} = f.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="text-center">
        <label htmlFor="fullname"> Nombre Completo: </label>
        <input type="text" name="fullname" onChange={this.stateChange} />
        <div className="border border-primary py-3">
            <h4> Greetings, {this.state.fullname}!</h4>
        </div>
      </div>
    );
  }
}

export default Greeting;