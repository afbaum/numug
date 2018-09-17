import React, { Component } from 'react';

import Mindmap from '../../images/hand.jpg';

function CallForPapers(props){
  return(
    <div>
      <div className='container'>
          <div className="row align-items-center justify-content-center">
            <div className="col-sm">
              <img src={Mindmap}/>
            </div>
            <div className="col-sm">
                <h2 className='text-center'>Call for Presenters, Abstracts and Papers</h2>
                <p>In support of planning the upcoming NUMUG meeting,
                we would appreciate getting commitments from Presenters
                by August 17th 2018.   Abstracts and presentations can
                be submitted in September and early October as referenced
                later in this announcement.</p>
            </div>
          </div>
        </div>
        <hr className="my-4"/>

      <div className='container paperList'>
      <div className='row'>
        <div className='col-sm'>
          <h2 className='text-center'>Technical paper presentations and panael discussions
          will address areas such as:</h2>
          <ul>
            <li>meteorological monitoring – including equipment and
            data processing upgrade issues </li>
            <li>evolving regulations and guidance for meteorological
            monitoring at nuclear facilities</li>
            <li>atmospheric dispersion modeling for accidental and
            routine airborne releases, including control room habitability
            issues</li>
            <li>meteorological case studies</li>
            <li>data requirements for decommissioning/onsite spent fuel
            storage (ISFSIs)</li>
            <li>concerns related to proposed new plants</li>
            <li>other applications for weather information within
            nuclear electric utility operations </li>
          </ul>
        </div>
        <div className='col-sm'>
          <h2 className='text-center'>The following deadlines have been
          established:</h2>
          <ul>
            <li>Presenter commitment:  August 17, 2018</li>
            <li>Abstract (preferably one page or less) due:  September 14, 2018</li>
            <li>Final Paper, PowerPoint presentation, and speaker bio due:
             October 12, 2018</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="container text-center">
        <h3>Please send abstracts to:</h3>
        <p>Francis J. Hickey</p>
        <p>Chemistry Support Sr. Health Physicist</p>
        <p>Susquehanna Nuclear, LLC</p>
        <p>769 Salem Blvd.  (NUCSA3)</p>
        <p>Berwick, PA 18603</p>
        <p>e-mail:  Francis.Hickey@TalenEnergy.com</p>
        <p>PHONE:  570-542-3056     FAX:  570-542-3461</p>
      </div>
    </div>
  )
}

export default CallForPapers
