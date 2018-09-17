import React { Component } from 'react';

class Joinmodal extends Comonent{
  render(){
    return(
      <div>
        <div className="modal fade" id="joinModal" tabindex="-1" role="dialog" aria-labelledby="joinModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="joinModalLabel">Join Now!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="registerEmail">Email address</label>
                    <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div className="form-group">
                    <label for="registerPassword">Password</label>
                    <input type="password" className="form-control" id="registerPassword" placeholder="Password">
                  </div>
                  <div className="form-group">
                    <label for="registerPasswordVerify">Verify Password</label>
                    <input type="password" className="form-control" id="registerPasswordVerify" placeholder="Verify Password">
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

export defaul Joinmodal;
