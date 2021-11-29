
import React, { useState, useContext, useParams, setState } from "react";
class Form2 extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ''
      }
    }
    
    handleChange = (e) => {
      const { value } = e.target
      this.setState({ name: value })
    }
    
    handleSubmit = (e) => {
      e.preventDefault()
      alert(this.state.name)
    }
    
    render () {
      const { name } = this.state
      
      return (
        <div>
           <h1>Simple form</h1>
           <form onSubmit={this.handleSubmit}>
            <label for>Name:
              <input 
                type="text" 
                value={name} 
                onChange={this.handleChange} 
              />
            </label>
            
            <button type="submit">Send</button>
          </form>
  
          <div>
              <h2>Values of the form</h2>
              <p>Name: {this.state.name}</p>
          </div>
        </div>
      )
    }
  }
   export default Form2