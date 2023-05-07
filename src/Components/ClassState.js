import React, { Component } from 'react'

export class ClassState extends Component {
  state = {
    name: "Hello world"
  }
  updateName = () => {
    this.setState({ name: "Welcome to Prepbytes" })
  }
  render() {
    return (
      <div>
        {this.state.name} <br />
        <button onClick={this.updateName}>Click me!</button>
      </div>
    )
  }
}

export default ClassState

