import React, { Component } from 'react';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      logout: false,
    }
  }


  render(){
    return (
        <div className="container">
          <div className="row">


              <div className="four columns">
                <button className="button button-primary" onClick={this.props.navigateToIndex}>Home</button>
              </div>


              {/* <div className="three columns">
              <button className="button button" onClick={this.props.openLearnMorePage}>Learn More</button>
            </div> */}


            <div className="four columns">
                  <button className="button button" onClick={this.props.renderAddNewUserForm}>Create New Form</button>
            </div>


            <div className="four columns">
              <button className="button button" onClick={this.props.logout}>Logout</button>
            </div>

          </div>
        </div>
    )
  }
}


export default Navbar;
