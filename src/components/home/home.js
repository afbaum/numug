import React, { Component } from 'react';

import FixedBackground from './fixedbackground.js';
import Welcome from './welcome.js';
import TwoColumn from './twoColumn.js';

class Home extends Component{
  render(){
    return(
      <div>
        <FixedBackground/>
        <Welcome/>
        <TwoColumn/>
      </div>
    )
  }
}

export default Home
