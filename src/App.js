import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Title from './components/title.js';
import Navbar from './components/navbar.js'

import Home from './components/home/home.js';
import Conference from './components/conference/conference.js';
import PositionPaper from './components/PositionPaper/PositionPaper.js';
import ControlledInput from './components/forum/forum.js';
import Footer from './components/footer.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  // componentDidMount() {
  //   fetch('https://www.ncdc.noaa.gov/cdo-web/api/v2/stations',{
  //     headers: 'aoAUJqGZCSZvkGSPMrgrEZqCStyqygZk',
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Title title = 'Nuclear Utility Meteorology User Group'/>
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/Conference' component={Conference}/>
          <Route path='/PositionPaper' component={PositionPaper}/>
          <Route path='/ControlledInput' component={ControlledInput}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
