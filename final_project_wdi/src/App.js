import React, { Component } from 'react';
import './App.css';
import logo from './logo.png'
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
    last_name: '',
    username: '',
    formShow: false,
    formToShow: [],
    showNewForm: '',
    editedFormId: '',
    formToEdit: '',
    showNewForm: false,
    showFormIndex: true,
    showEditForm: false,
    showMoreInfo: false
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

  register = async (first_name, last_name, username, password) => {
    const userRegister = await fetch('http://localhost:9292/user/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: password

      })
    })
    const registrationResponse = await userRegister.json();

    if(registrationResponse.success){
      this.setState({
        loggedIn: true,
        showFormIndex: true
      })

      // .then((user) => {
      //   this.setState({
      //     user_id: user.found_user.id,
      //     first_name: user.found_user.first_name,
      //     username: user.found_user.username
      //   })
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
    } else {
      this.setState({
        loginError: registrationResponse.message
      })
    }
  };

  logout = async (username, password) => {
    const userLogout = await fetch('http://localhost:9292/user/logout', {
    });
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
      showMoreInfo: false
    })
  }

  navigateToIndex = (e) => {
    this.setState({
      showNewForm: false,
      formShow: false,
      showEditForm: false,
      showFormIndex: true,
      showMoreInfo: false

    })
  };


  openLearnMorePage = (e) => {
    console.log("button being clicked!");
    this.setState({
      showNewForm: false,
      showFormIndex: false,
      showEditForm: false,
      showMoreInfo: true
    })
  };


  getFormToEdit = async () => {
    const id = this.state.editedFormId;

    const formJson = await fetch('http://localhost:9292/form/' + id, {
      credentials: 'include'
    });

    const form = await formJson.json();
    this.setState({
      formToEdit: form
    })
  }

  renderEditForm = async (e) => {
    const id = e.currentTarget.parentNode.id;
    console.log(id, "<------THIS IS ID");

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

  render(){

    return(
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <img id="logo" src={logo} alt={"logo"}/>
            </div>
          </div>
        </div>


        <div id="AppContainer">

          {this.state.loggedIn ?

            <div className="container">

                {/* <div className="row">
                  <div className="twelve columns">

                    <br />
                  </div>
                </div> */}

              <div className="row">
                <div className="twelve columns">
                  <Navbar renderAddNewUserForm={this.renderAddNewUserForm} showNewForm={this.state.showNewForm} showMoreInfo={this.state.showMoreInfo} navigateToIndex={this.navigateToIndex} openLearnMorePage={this.openLearnMorePage} logout={this.logout}/>
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
                  <UserFormContainer showNewForm={this.state.showNewForm} showFormIndex={this.state.showFormIndex} showEditForm={this.state.showEditForm} editedFormId={this.state.editedFormId} getFormToEdit={this.state.getFormToEdit} renderEditForm={this.renderEditForm} formToEdit={this.state.formToEdit} navigateToIndex={this.navigateToIndex} openLearnMorePage={this.openLearnMorePage}/>
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
