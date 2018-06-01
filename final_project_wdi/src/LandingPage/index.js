import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const LandingPage = () => {
  return(

      <div className="container">
        <div className="row">

          <div className= "four columns">
            <button><Link to='/user/more_info'>Learn More</Link></button>
          </div>

          <div className="four columns">
            <button><Link to='/user/register'>Register as New User</Link></button>
          </div>

          <div className="four columns">
            <button><Link to='/user/login'>Login</Link></button>
          </div>

        </div>
      </div>

  )
}

export default LandingPage;
