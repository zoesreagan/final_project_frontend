import React, { Component } from 'react';
import "./style.css";
import AddNewForm from './AddNewFormContainer';
import FormIndex from './FormIndex';
import EditForm from './EditFormContainer'

class UserFormContainer extends Component {
  constructor(){
    super();
    this.state={
      form: [],
      addedForm: '',
      formToEdit: ''
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

//create the form
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

		console.log(formParsed);

    this.props.navigateToIndex()
		this.getFormByUser()
			.then((response) => {
				this.setState({form: response.form})
			})
			.catch((err) => {
				console.log(err);
			})

  }



//edit the form
    editForm = async (dateCreated, responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix, responseSeven, responseEight, responseNine) => {
      const id = this.props.editedFormId
      const form = await fetch('http://localhost:9292/form/' + id, {
        method: 'PUT',
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
      })

    const response = await form.json();
    console.log(response);
    this.props.navigateToIndex()
    this.getFormByUser()
    .then((response) => {

      this.setState({form: response.form})
      }
    )
    .catch((err) => {
      console.log(err);
    })
  };

//delete the form
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


  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="twelve columns">
              <div>
                {this.props.showNewForm ?
                <AddNewForm addedForm={this.state.addedForm} createForm={this.createForm} navigateToIndex={this.navigateToIndex} />
                 : <div>
                   {this.props.showFormIndex ?
                     <FormIndex form={this.state.form} deleteForm={this.deleteForm} renderEditForm={this.props.renderEditForm} editedFormId={this.props.editedFormId} getFormToEdit={this.props.getFormToEdit} formToEdit={this.props.formToEdit} />
                     :<div>
                       {this.props.showEditForm ?
                       <EditForm editForm={this.editForm} formToEdit={this.props.formToEdit} />
                        : <div>
                      </div>
                      }
                    </div>
                  }
                 </div>
               }
            </div>
         </div>
       </div>
     </div>

    )
  }
}


export default UserFormContainer;
