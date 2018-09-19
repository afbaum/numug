import React, { Component } from 'react';

class Archive extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const elements = this.props.archiveArray.map( (item, index) => {
      return <li key={item.id}>{item.year} - {item.title} </li>
    })
    return <ul> elements </ul>
  }
}

export default Archive
