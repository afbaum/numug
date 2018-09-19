import React, { Component } from 'react';
let Parser = require('rss-parser');
let parser = new Parser();

class ControlledInput extends Component{
  constructor(props){
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render(){
    return(
      <div className='container'>
        <form>
          <div className='form-group'>
            <textarea type='text' className='form-control id' value={this.state.value} onChange={this.handleChange}/>
            <button type='submit' className='btn btn-secondary mb-2 formButton'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ControlledInput
