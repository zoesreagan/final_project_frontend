import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import LearnMoreContainer from './LearnMoreContainer';

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

      // .then((user) => {
      //   this.setState({
      //     // user_id: user.found_user.id,
      //     // first_name: user.found_user.first_name,
      //     // last_name: user.found_user.last_name,
      //     // username: user.found_user.username,
      //     // birth_date: user.found_user.birth_date
      //   })
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
    } else {
      this.setState({
        loginError: loginResponse.message
      })
    }
  }


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
            </div>



              <Switch>
                  <Route exact path="/user/register" component={ RegisterContainer } />
                  <Route exact path="/user/login" component={ LoginContainer } />
                  <Route exat path="/user/more_info" component={ LearnMoreContainer} />
              </Switch>
        </div>
      </div>
    );
  }
}

export default App;
