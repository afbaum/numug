import React, { Component } from 'react';

import Meeting from './meeting.js';
import CallForPapers from './callforpapers.js';
import Accommodations from './accommodations.js';

class Conference extends Component{
  render(){
    return(
      <div>
        <Meeting/>
        <CallForPapers/>
        <Accommodations/>
      </div>
    )
  }
}

export default Conference
