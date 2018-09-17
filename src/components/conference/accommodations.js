import React, { Component } from 'react';

import Nevada from '../../images/nevada.jpg';

class Accommodations extends Component{
  render(){
    return(
      <div>
        <div className='container paperList'>
          <div className='row'>
            <div className='col-sm'>
              <h3 className='text-center'>Accommodations</h3>
              <p>Attendees are responsible for making their own hotel room
              reservations. We have negotiated a special group rate of $89.00 per
              night (Sunday through Thursday) at the Tuscany Suites & Casino.
              Friday and Saturday group rate is $139.00 per night.</p>
              <p>Reservations can be made by calling the Tuscany Room Reservations department at
              877-887-2261 and ask for the NUMUG group rate.
              Onsite parking is available at no cost and there is valet parking also available.
              There is a transportation shuttle to & from the airport to Tuscany Suites for
              $8.50 per person one way.</p>
            </div>
            <div className='col-sm'>
              <img src= {Nevada}/>
            </div>
          </div>
        </div>
        <div className='container'>
          <p>Address: 255 E. Flamingo Road Las Vagas, NV 89169-4708</p>
          <p>Phone: 877-887-2261</p>
          <p>Web: www.tuscanyly.com/</p>
        </div>
      </div>
    )
  }
}

export default Accommodations
