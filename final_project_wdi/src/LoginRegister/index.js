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
		const field = e.currentTarget.name
		if(field == 'first_name') this.setState({ first_name: e.currentTarget.value })
		else if(field == 'last_name') this.setState({ last_name: e.currentTarget.value })
		else if (field == 'username') this.setState({ username: e.currentTarget.value })
		else if(field == 'password') this.setState({ password: e.currentTarget.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if(this.state.registering) this.props.register(this.state.first_name, this.state.last_name, this.state.username, this.state.password)
		else this.props.login(this.state.username, this.state.password)
	}

	render(){
		return(
			<div>
				<h2>If you are a new user, please register.</h2>

				<h3>If you are a returning user, please log in.</h3>

				<button className={this.state.registering ? "current" : null} className="button" onClick={this.registration}>Create new user</button><br />
				<button className={this.state.registering ? null : "current"} className="button" onClick={this.login}>Login</button>

				<form onSubmit={this.handleSubmit}>
					<input className={this.state.registering ? null : 'hide'} type='text' name='first_name' placeholder='first name' value={this.state.first_name} onChange={this.handleInput}/><br />
					<input className={this.state.registering ? null : 'hide'} type='text' name='last_name' placeholder='last name' value={this.state.last_name} onChange={this.handleInput}/><br />
					<input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput}/><br />
					<input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInput}/><br />
					<button className="button button-primary" type='submit'>Submit</button>
				</form>
				{this.props.loginError != '' ? <p>{this.props.loginError}</p> : null}
			</div>
		)
	}
}

export default LoginRegister;
