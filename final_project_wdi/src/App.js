import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import LearnMoreContainer from './LearnMoreContainer';
import UserFormContainer from './UserFormContainer';

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
      birth_date: ''
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

  render() {
    return (
      <div className="App">

          <div id="AppContainer">
            <h2>Welcome to Behest</h2>
            <h5>Advanced Directives for Dementia Related Conditions</h5>

            <div className="container">
              <div className="row">

                <div className= "four columns">
                  <button><Link to='/user/more_info'>Learn More</Link></button>
                </div>

                <div className="four columns">
                  <button><Link to='/user/register'>Register as New User</Link></button>
                </div>

                <div className="four columns">
                  <button><Link to='/user/login'>Login</Link></button>
                </div>

              </div>
              <div className="row">
                <div className="twelve coumns">

                </div>
              </div>
            </div>

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
                      <LoginContainer login={this.login} />
                    )
                  )} />

                  <Route exact path="/form" component={ UserFormContainer } />
                  <Route exact path="/user/more_info" component={ LearnMoreContainer } />
              </Switch>

        </div>
      </div>
    );
  }
}

export default App;
