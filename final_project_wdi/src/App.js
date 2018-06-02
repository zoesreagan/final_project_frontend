import React, { Component } from 'react';
import './App.css';
import LearnMoreModal from './UserFormContainer/LearnMore';
import UserFormContainer from './UserFormContainer';
import Navbar from './NavBar';
import LoginRegister from './LoginRegister'


class App extends Component {
  constructor(){
    super();
    this.state = {
    loggedIn: false,
    loginError: '',
    user_id: '',
    first_name: '',
    username: '',
    formShow: false,
    formToShow: [],
    showNewForm: '',
    editedFormId: '',
    tripToEdit: '',
    showNewForm: false,
    showFormIndex: true,
    showEditForm: false,
    showMoreInfo: false,
    openModal: false
    }
  }

  login = async (username, password) => {
    const userLogin = await fetch('http://localhost:9292/user/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    const loginResponse = await userLogin.json()
    if(loginResponse.success){
      this.setState({
        loggedIn: true,
      })
    } else {
      this.setState({
        loginError: loginResponse.message
      })
    }
  };

  register = async (first_name, last_name, username, password, birth_date) => {
    const userRegister = await fetch('http://localhost:9292/user/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: password
        // birth_date: birth_date
      })
    })
    const registrationResponse = await userRegister.json();
    if(registrationResponse.success){
      this.setState({
        loggedIn: true,
      })
    } else {
      this.setState({
        loginError: registrationResponse.message
      })
    }
  };

  logout = async (username, password) => {
    const userLogout = await fetch('http://localhost:9292/user/logout', {
    });
    // console.log(userLogout, "logout button being clicked");
    const logoutResponse = await userLogout.json();
    if(logoutResponse.success){
      this.setState({
        loggedIn: false
      })
    } else {
      this.setState({
        loggedIn: true
      })
    }
  }

  renderAddNewUserForm = () => {
    this.setState({
      showNewForm: true,
      showFormIndex: false,
      showEditForm: false,
      showMoreInfo: false,
      openModal: false
    })
  }

  navigateToIndex = (e) => {
    this.setState({
      showNewForm: false,
      formShow: false,
      showEditForm: false,
      showFormIndex: true,
      showMoreInfo: false,
      openModal: false
    })
  };


  openModal = (e) => {
    this.setState({
      showNewForm: false,
      showFormIndex: false,
      showEditForm: false,
      showMoreInfo: false,
      openModal: true
    })
  };

  closeModal = (e) => {
      this.setState({
        openModal: false
      })
    };

    renderEditForm = async (e) => {
    const id = e.currentTarget.parentNode.id;

    const formJson = await fetch('http://localhost:9292/form/' + id, {
      credentials: 'include'
    });
    const form = await formJson.json();
    this.setState({
      showEditForm: true,
      showNewForm: false,
      showFormIndex: false,
      editedFormId: id,
      formToEdit: form
    });
  }

    formToEdit = async () => {
    const id = this.state.editedFormId;

    const formJson = await fetch('http://localhost:9292/form/' + id, {
      credentials: 'include'
    });

    const form = await formJson.json();
    this.setState({
      formToEdit: form
    })
  }

  render(){

    return(
      <div className="App">
        <div id="AppContainer">
          <h2>Welcome to Behest</h2>
          <h5>Advanced Directives for Dementia Related Conditions</h5>

          {this.state.loggedIn ?

            <div className="container">

                <div className="row">
                  <div className="twelve columns">
                    <br />
                  </div>
                </div>

              <div className="row">
                <div className="twelve columns">
                  <Navbar renderAddNewUserForm={this.renderAddNewUserForm} showNewForm={this.state.showNewForm} navigateToIndex={this.navigateToIndex} openModal={this.openModal} logout={this.logout}/>
                  </div>
                </div>


              <div className="row">
                <div className="twelve columns">
                  <br />
                  <br />
                  <br />
                </div>

              </div>

                <div className="row">
                  <div className="twelve columns">
                  <UserFormContainer showNewForm={this.state.showNewForm} showFormIndex={this.state.showFormIndex} showEditForm={this.state.showEditForm} editedFormId={this.state.editedFormId} formToEdit={this.state.formToEdit} renderEditForm={this.renderEditForm} navigateToIndex={this.navigateToIndex}/>
                  </div>
                </div>
              </div>

            : <LoginRegister login={this.login} register={this.register} loginError={this.state.loginError} logout={this.logout}/>
            }
          </div>


        </div>
      )

    }

  }

export default App;
