import React, { Component } from 'react';
import './App.css';
import { withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import LearnMoreContainer from './LearnMoreContainer';
import UserFormContainer from './UserFormContainer';
import AddNewForm from './UserFormContainer/AddNewFormContainer';
import LandingPage from './LandingPage'

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
      birth_date: '',
      form: [],
      addedForm: '',
      newFormShow: false
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
        password: password,
        birth_date: birth_date
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

  render() {

    return (
      <div className="App">
        <div id="AppContainer">
          <h2>Welcome to Behest</h2>
          <h5>Advanced Directives for Dementia Related Conditions</h5>
            <button><Link to = '/welcome'>Get Started</Link></button>
              <Switch>


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

              </Switch>
            </div>
        </div>
    );
  }
}

export default App;
