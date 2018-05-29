import React, { Component } from 'react';
import "./style.css"

class UserFormContainer extends Component {
  constructor(){
    super();
    this.state={
      forms: []
    }
  }

  componentDidMount(){
    this.getFormByUser()
    .then((forms) => {
      this.setState({forms: forms})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getFormByUser = async () => {
    const formJson = await fetch('http:localhost:9292/form', {
      credentials: 'include'
    });
  }

  render(){
    return(
      <div className="container" id="userContainer">
        <div className="row">
          <div className="twelve columns">
            <h1>Hello</h1>

          </div>
        </div>
      </div>
    )
  }
}

export default UserFormContainer;
