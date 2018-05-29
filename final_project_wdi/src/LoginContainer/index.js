import React, { Component } from 'react';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      password: ''
    }
  }


  handleInput = (e) => {
    console.log(e.currentTarget.name);
		const field = e.currentTarget.name
		if (field === 'username') this.setState({ username: e.currentTarget.value })
		else if (field === 'password') this.setState({ password: e.currentTarget.value })
	};

  handleSubmit = (e) => {
		e.preventDefault();
		this.login( this.state.username, this.state.password)
	};

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
  };

  render() {
    return (
        <div className="container">

          <div className="row">
            <div className="twelve columns">
              <form onSubmit={this.handleSubmit}>
              	<input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput}/><br />
                <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInput}/><br />
              	<button className="button button-primary" type='submit'>Submit</button>
            	</form>
            </div>
          </div>
            {this.props.loginError ==! '' ? <p>{this.props.loginError}</p> : null}
        </div>
      );
    }
  }


export default LoginContainer;
