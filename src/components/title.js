import React from 'react';

function Title(props){
  return(
    <div className="container-fluid">
    <div className="row text-center">
      <div className="col-12">
        <h1 className="header">{props.title}</h1>
      </div>
    </div>
  </div>
  )
}

export default Title;
