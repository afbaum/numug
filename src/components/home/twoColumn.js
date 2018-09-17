import React, { Component } from 'react';

class TwoColumn extends Component{
  render(){
    return(
      <div>
        <div className="container-fluid padding">
        <div className="row justify-content-around padding">
          <div className="col-lg-5 text-center confrence">
            <div className="imageText">
              <h2>Join the Confrenece in 100 Days </h2>
              <h4>NUMUG 2018 Annual Confrence in Las Vegas Navada October 17-19.</h4>
              <br/>
              <button type="button" className="btn btn-primary">More Info</button>
            </div>
          </div>
          <div className="col-lg-5 text-center papers">
            <div className="imageText">
              <h2>Call For Papers</h2>
              <h4>For submition deadlines click below.</h4>
              <br/>
              <button type="button" className="btn btn-primary">More Info</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default TwoColumn;
