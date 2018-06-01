import React, { Component } from 'react';
import './App.css';
import { withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
// import RegisterContainer from './RegisterContainer';
// import LoginContainer from './LoginContainer';
// import LearnMoreContainer from './LearnMoreContainer';
import UserFormContainer from './UserFormContainer';
import Navbar from './NavBar';
import LoginRegister from './LoginRegister'

// import LandingPage from './LandingPage'

class App extends Component {
  constructor(){
    super();
    this.state = {

    loggedIn: false,
    loggedIn: false,
    loginError: '',
    user_id: '',
    first_name: '',
    username: '',
    openModal: false,
    formShow: false,
    formToShow: [],
    // birth_date: '',

    }
  }

  componentDidMount(){
    // this.getFormByUser()
    // .then((response) => {
    //   this.setState({form: response.form})
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
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
      // showEditForm: false
    })
  }

  navigateToIndex = (e) => {
    this.setState({
      showNewForm: false,
      formShow: false,
      showEditForm: false,
      // showFormIndex: true
    })
  };


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
                  <Navbar renderAddNewUserForm={this.renderAddNewUserForm} showNewForm={this.state.showNewForm} navigateToIndex={this.navigateToIndex} logout={this.logout}/>
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
                  <div className="eight columns">
                  <UserFormContainer showNewForm={this.state.showNewForm} showFormIndex={this.state.showFormIndex} />
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
            {/* <button><Link to = '/welcome'>Get Started</Link></button> */}
              {/* <Switch>


                  <Route exact path="/user/register" render={() => (
                    this.state.loggedIn ? (
                      <Redirect to ='/form' />
                    ) : (
                      <RegisterContainer register={this.register} />
                    )
                  )} />

                  <Route exact path="/user/login" render={() => (
                    this.state.loggedIn ? (
                      <Redirect to ='/form' />
                    ) : (
                      <LoginContainer login={this.login} loginError={this.state.loginError} />
                    )
                  )} />

                  <Route exact path="/welcome" render={ (props) => <LandingPage {...props} login={this.login} register={this.register} /> } />

                  <Route exact path="/form" render={ (props) => <UserFormContainer {...props} /> } />

                  <Route exact path="/user/more_info" component={ LearnMoreContainer } />

                  <Route exact path="/form/new" render={ (props) => <AddNewForm {...props} createForm={this.createForm} /> } />

              </Switch> */}

export default App;
