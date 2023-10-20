import React, { Component } from 'react'

export default class EventListener extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ''
      }
    }
    

    handleOnChange = (e) =>{
        this.setState({
            changeValue : e.target.value
        }, ()=>{
            console.log(this.state.changeValue)
        })
        
    }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleOnChange} placeholder='Enter Your text' className='m-5 p-2'/>
      <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
