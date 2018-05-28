import React, {Component} from "react";
import './style.css'

class LoginRegister extends Component{
  constructor(){
    super();
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      birth_date: '',
      registering: false
    }
  }

  registration = () => {
    this.setState({
      registering: true
    })
  }

  login = () => {
    this.setState({
      registering: false
    })
  }


  handleInput = (e) => {
		const field = e.currentTarget.first_name
		if(field == 'first_name') this.setState({ first_name: e.currentTarget.value })
    else if (field == 'last_name') this.setState({ last_name: e.currentTarget.value })
		else if (field == 'username') this.setState({ username: e.currentTarget.value })
		else if (field == 'password') this.setState({ password: e.currentTarget.value })
		else this.setState({ birth_date: e.currentTarget.value })
	}

  handleSubmit = (e) => {
		e.preventDefault();
		if(this.state.registering) this.props.register(this.state.first_name, this.state.last_name, this.state.username, this.state.password, this.state.birth_date)
		else this.props.login(this.state.username, this.state.password)
	}

  render(){
		return(
			<div className="container">

        <div className="row" id="loginNav">

          <div className="six columns">
    				<button className={this.state.registering ? null : "current"} className="button" onClick={this.login}>Login</button>
            </div>

          <div className="six columns">
            <button className={this.state.registering ? "current" : null} className="button" onClick={this.registration}>Get Started!</button><br />
          </div>
        </div>

          <div className="row">
            <div className="twelve columns">
              <form onSubmit={this.handleSubmit}>
      					<input className={this.state.registering ? null : 'hide'} type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleInput}/><br />
                <input className={this.state.registering ? null : 'hide'} type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleInput}/><br />
      					<input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput}/><br />
      					<input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInput}/><br />
      					<input className={this.state.registering ? null : 'hide'} type='date' name='birth_date' placeholder='Date of Birth' value={this.state.birth_date} onChange={this.handleInput}/><br />
      					<button className="button button-primary" type='submit'>Submit</button>
      				</form>
            </div>
          </div>

				{this.props.loginError != '' ? <p>{this.props.loginError}</p> : null}
			</div>
		)
	}

}

export default LoginRegister;
