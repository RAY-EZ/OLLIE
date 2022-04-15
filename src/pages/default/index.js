import React from 'react';
import { Link} from 'react-router-dom';

function Default(){
  return(
    <div className="default">
      <div className="content__wrapper">
        <h1 className="default__heading">Dummy Route</h1>
        <p className="default__message">Go back to {<Link to="/" className="link">Home Page</Link>}</p>
      </div>

    </div>
  )
}

export default Default;