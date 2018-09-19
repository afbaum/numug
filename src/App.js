import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Title from './components/title.js';
import Navbar from './components/navbar.js'

import Home from './components/home/home.js';
import Conference from './components/conference/conference.js';
import PositionPaper from './components/PositionPaper/PositionPaper.js';
import ControlledInput from './components/forum/forum.js';
import Archive from './components/presentations/archive.js';
import Footer from './components/footer.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

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
          <Route path='/Arcive' render={(props) => <Archive {...props} archiveArray={archive}/>}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const archive = [
  {id: 100, year: 1991, title: '1st NUMUG Meeting, Chattanooga, TN'},
  {id: 101, year: 1993, title: '2nd NUMUG Meeting, Boston, MA'},
  {id: 102, year: 1994, title: '3rd NUMUG Meeting, Charlotte, NC'},
  {id: 103, year: 1996, title: '4th NUMUG Meeting, San Fancisco, CA'},
  {id: 104, year: 1997, title: '5th NUMUG Meeting, SouthBen, IN'},
  {id: 105, year: 1999, title: '6th NUMUG Meeting, Syracuse, NY'},
  {id: 106, year: 2000, title: '7th NUMUG Meeting, Las Vages, NV'},
  {id: 107, year: 2002, title: '8th NUMUG Meeting, St. Charles, IL'},
  {id: 108, year: 2003, title: '9th NUMUG Meeting, Chattanooga, TN'},
  {id: 109, year: 2005, title: '10th NUMUG Meeting, Hilton Riverside, Wilmington, NC'},
  {id: 110, year: 2006, title: '11th NUMUG Meeting, St.Louis, MO'},
  {id: 111, year: 2008, title: '12th NUMUG Meeting, Charlotte, NC'},
  {id: 112, year: 2009, title: '13th NUMUG Meeting, San Fransizco, CA'},
  {id: 113, year: 2011, title: '14th NUMUG Meeting, Chicago, IL'},
]

export default App;
