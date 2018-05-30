import React, { Component } from 'react';
import "./style.css"
import AddNewForm from './NewFormContainer'

class UserFormContainer extends Component {
  constructor(){
    super();
    this.state={
      form: [],
      addedForm: '',
      // formToEdit: '',
    }
  }

  componentDidMount(){
    this.getFormByUser()
    .then((response) => {
      this.setState({form: response.form})
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
    console.log(form, 'this is form from getFormByUser');
    return form;
  }


  createForm = async (dateCreated, responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix, responseSeven, responseEight, responseNine) => {
    const form = await fetch('http://localhost:9292', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        dateCreated: dateCreated,
        responseOne: responseOne,
        responseTwo: responseTwo,
        responseThree: responseThree,
        responseFour: responseFour,
        responseFive: responseFive,
        responseSix: responseSix,
        responseSeven: responseSeven,
        responseEight: responseEight,
        responseNine: responseNine
      })
    });

    const formParsed = await form.json();
    console.log(formParsed);
    this.getFormByUser()
    .then((response) => {
      this.setState({form: response.form})
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render(){

    const formList = this.state.form.map((form, i) => {
      return <ul className="formList" id={form.id} key={i}>
        <li>Date Created: {form.date_created}</li>
        <li>{form.response_1}</li>
        <li>{form.response_2}</li>
        <li>{form.response_3}</li>
        <li>{form.response_4}</li>
        <li>{form.response_5}</li>
        <li>{form.response_6}</li>
        <li>{form.response_7}</li>
        <li>{form.response_8}</li>
        <li>{form.response_9}</li>
      </ul>
    })

    return(
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <h3>Welcome back</h3>
          <div id="formList">
                {formList}
          </div>
          <AddNewForm />
        </div>
      </div>
    </div>

        )
  }
}

export default UserFormContainer;
