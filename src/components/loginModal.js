import React { Component } from 'react';

class Loginmodal extends Component{
  render(){
    return(
      <div>
        <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="loginEmail">Email address</label>
                    <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div className="form-group">
                    <label for="loginPassword">Password</label>
                    <input type="password" className="form-control" id="loginPassword" placeholder="Password">
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Loginmodal;
