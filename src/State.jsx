import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleIncrement = () => {
        this.setState({
            count: this.state.count +1
        })
    }
    handleDicrement = () => {
        this.setState ({
            count: this.state.count -1
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.handleIncrement} className='bg-green-500 px-4 py-4 m-5 rounded-xl hover:bg-green-600 text-2xl text-white'>+</button>
        <button onClick={this.handleDicrement} disabled={count === 0 ? true : false} className='bg-red-500 px-4 py-4 m-5 rounded-xl hover:bg-red-600 text-2xl text-white'>-</button>
      </div>
    )
  }
}
