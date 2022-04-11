import React from 'react';
import { Link} from 'react-router-dom';

function Default(){
  return(
    <>
      <h1>Dummy Route</h1>
      <p>Go back to {<Link to="/">Home Page</Link>}</p>
    </>
  )
}

export default Default;