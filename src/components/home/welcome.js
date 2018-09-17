import React, { Component } from 'react';

class Welcome extends Component{
  render(){
    return(
      <div>
        <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h5 className='display-4'>NUMUG Mission</h5>
          </div>
          <hr/>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead"> Providing a forum to address problems and exchange ideas for those
            collecting and utilizing meteorological data at nuclear facilities.  Membership is open
            to any individual interested in pursuing the mission and objectives of the group.  </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="#"><button type="button" className="btn btn-outline-secondary btn-lg" data-toggle="modal"
              data-target="#joinModal"> Join Now!</button></a>
          </div>
        </div>
        </div>
        <hr className="my-4"/>
      </div>
    )
  }
}

export default Welcome;
