import React, { Component } from 'react';
import "./style.css";
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import AddNewForm from './AddNewFormContainer'

class UserFormContainer extends Component {
  constructor(){
    super();
    this.state={
      form: [],
      addedForm: '',
      // formToEdit: '',
    }
  }

  componentDidMount() {
    this.getFormByUser()
    this.getFormList()
    console.log(this.state, " this is state right now")
  }


  getFormByUser = async () => {
    const formJson = await fetch('http://localhost:9292/form', {
      credentials: 'include'
    });
    console.log(formJson);
    const forms = await formJson.json();
    console.log(forms, 'this is form from getFormByUser');

    // return form;
    this.getFormList()
    this.setState({
      form: forms
      // return form;
    })

    console.log(this.state.form, " this is state after getFormByUser")
  }


  deleteForm = async (e) => {
		e.preventDefault();
		const id = parseInt(e.target.parentNode.id)
		const form = await fetch('http://localhost:9292/' + id, {
			method: "DELETE",
			credentials: 'include'
		})

		this.setState({
			form: this.state.form.filter((form) => {
				return form.id != id
			})
		})
	}
  getFormList = async () => {
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
        <button onClick={this.deleteForm}>Delete Form</button>
      </ul>
    })
  }


  render(){
    // const formList = this.state.form.map((form, i) => {
    //   return <ul className="formList" id={form.id} key={i}>
    //     <li>Date Created: {form.date_created}</li>
    //     <li>{form.response_1}</li>
    //     <li>{form.response_2}</li>
    //     <li>{form.response_3}</li>
    //     <li>{form.response_4}</li>
    //     <li>{form.response_5}</li>
    //     <li>{form.response_6}</li>
    //     <li>{form.response_7}</li>
    //     <li>{form.response_8}</li>
    //     <li>{form.response_9}</li>
    //     <button onClick={this.deleteForm}>Delete Form</button>
    //   </ul>
    // })
    return(
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <h3>Welcome back</h3>
          <div id="formList">
                {this.formList}
              </div>

          <div className="row">
            <div className="twelve coulumns">
              <button><Link to='/form/new'>Start New Form</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>

        )
  }
}

export default UserFormContainer;
