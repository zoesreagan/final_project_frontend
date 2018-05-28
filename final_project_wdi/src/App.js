import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister';


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


  render() {
    return (
      <div className="App">

          <div id="AppContainer">
            {this.state.loggedIn ?

            <div className="container">
              <div className="row">
                <div className="twelve columns">
                  <h2>Hello, world!</h2>
                </div>
              </div>
            </div>

            : <LoginRegister login={this.login} register={this.register} loginError={this.state.loginError} logout={this.logout}/>
            }
          </div>

      </div>
    );
  }
}

export default App;
