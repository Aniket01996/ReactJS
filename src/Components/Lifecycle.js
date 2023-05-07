import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log("Component is mounted")
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
        console.log("Component is updated with each click")
    }
    componentWillUnmount(){
        console.log("Component unmounted") // As soon as we remove a component or comment anything
    }
    render() {
        return (
            <div>
                <div> Lifecycle Methods: {this.state.count}</div>
                <button onClick={this.increment}>Click me!</button>
            </div>
        )
    }
}

export default Lifecycle
