import React, { Component } from 'react';

function Metting(props){
  return(
    <div>
      <div className="jumbotron">
        <h1 className="display-4 text-center">19th NUMUG Meeting</h1>
        <h2 className="text-center">October 17-19, 2018 Las Vagas, NV</h2>
      </div>
      <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h5 className='display-4'>Backgroud and Objectives</h5>
        </div>
        <hr/>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
          <p className="lead"> The nineteenth Nuclear Utility Meteorological Data Users Group
          (NUMUG) meeting will be held at the Tuscany Suites & Casino in Las Vegas Nevada during
          October 17-19, 2018.  This technical meeting will include papers and panel discussion
          presentations, combined with ample opportunities for group and individual information
          exchanges, on meteorological monitoring and operations related to nuclear-powered
          electric-generating facilities.
          <br/>
          NUMUG Meeting attendance includes a dinner social event on Wednesday night, a dinner
          social event on Thursday evening, lunch on Thursday, breakfasts on Thursday and Friday,
          and snacks during breaks.   </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
          <a href="#"><button type="button" className="btn btn-outline-secondary btn-lg" data-toggle="modal"
            data-target="#joinModal"> Register Now!</button></a>
        </div>
      </div>
      </div>
      <hr className="my-4"/>
    </div>
  )
}

export default Metting
