import React, { Component } from 'react';
import "./style.css";
// import { Route, Link, Switch, Redirect } from 'react-router-dom';
import AddNewForm from './AddNewFormContainer';
import FormIndex from './FormIndex'

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
    console.log(this.state.form, " this is state after getFormByUser")
  }

  createForm = async (dateCreated, responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix, responseSeven, responseEight, responseNine) => {
    console.log( dateCreated, responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix, responseSeven, responseEight, responseNine)
    const form = await fetch('http://localhost:9292/form', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        date_created: dateCreated,
        response_1: responseOne,
        response_2: responseTwo,
        response_3: responseThree,
        response_4: responseFour,
        response_5: responseFive,
        response_6: responseSix,
        response_7: responseSeven,
        response_8: responseEight,
        response_9: responseNine
      })
    });

    const formParsed = await form.json();
    console.log(formParsed, "this is formParsed");
    this.getFormByUser()
    .then((response) => {
      console.log(this.state, "this is state in getFormByUser");
      this.setState({form: response.form})
      }
    )
    .catch((err) => {
      console.log(err);
    })
  };

  deleteForm = async (e) => {
		e.preventDefault();
		const id = parseInt(e.target.parentNode.id)
		const form = await fetch('http://localhost:9292/form/' + id, {
			method: "DELETE",
			credentials: 'include'
		})

		this.setState({
			form: this.state.form.filter((form) => {
				return form.id != id
			})
		})
	}
  // getFormList = async () => {
  //   const formList = this.state.form.map((form, i) => {
  //     return <ul className="formList" id={form.id} key={i}>
  //       <li>Date Created: {form.date_created}</li>
  //       <li>{form.response_1}</li>
  //       <li>{form.response_2}</li>
  //       <li>{form.response_3}</li>
  //       <li>{form.response_4}</li>
  //       <li>{form.response_5}</li>
  //       <li>{form.response_6}</li>
  //       <li>{form.response_7}</li>
  //       <li>{form.response_8}</li>
  //       <li>{form.response_9}</li>
  //       <button onClick={this.deleteForm}>Delete Form</button>
  //     </ul>
  //   })
  // }


  render(){
    return(
      // <div className="container">
      //   <div className="row">
      //     <div className="eight columns">
              <div>{this.props.showNewForm ?
                <AddNewForm addedForm={this.state.addedForm} createForm={this.createForm} />
                 :
                <FormIndex  form={this.state.form} deleteForm={this.deleteForm}/>
                }
               </div>


    )
  }

}

export default UserFormContainer;
