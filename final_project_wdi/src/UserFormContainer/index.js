import React, { Component } from 'react';
import "./style.css"
import CompletedUserForm from '../CompletedUserForm'

class UserFormContainer extends Component {
  constructor(){
    super();
    this.state={
      forms: [],
      firstName: '',
      // addedForm: '',
      // formToEdit: '',
    }
  }

  componentDidMount(){
    this.getFormByUser()
    .then((forms) => {
      this.setState({forms: forms.form})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getFormByUser = async () => {
    const formJson = await fetch('http://localhost:9292/form', {
      credentials: 'include'
    });
    console.log(formJson);
    const form = await formJson.json();
    console.log(form, ' this is form from getform');
    return form;
  }

  render(){
    return(
      <div className="container" id="userContainer">
        <div className="row">
          <div className="twelve columns">
            <h1>Hello, </h1>
            <button>Start New Directive</button>
            <CompletedUserForm getFormByUser={this.getFormByUser}  />
          </div>
        </div>
      </div>
    )
  }
}

export default UserFormContainer;
