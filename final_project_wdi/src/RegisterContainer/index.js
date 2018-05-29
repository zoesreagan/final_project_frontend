import React, { Component } from 'react';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      birth_date: '',
    }
  }

  handleInput = (e) => {
    console.log(e.currentTarget.name);
		const field = e.currentTarget.name
		if(field === 'first_name') this.setState({ first_name: e.currentTarget.value })
    else if (field === 'last_name') this.setState({ last_name: e.currentTarget.value })
		else if (field === 'username') this.setState({ username: e.currentTarget.value })
		else if (field === 'password') this.setState({ password: e.currentTarget.value })
		else this.setState({ birth_date: e.currentTarget.value })
	};

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.register(this.state.first_name, this.state.last_name, this.state.username, this.state.password, this.state.birth_date)
	};


  render() {
    return (
        <div className="container">

          <div className="row">
            <div className="twelve columns">
              <form onSubmit={this.handleSubmit}>
                <input type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleInput}/><br />
                <input type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleInput}/><br />
              	<input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInput}/><br />
                <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInput}/><br />
              	<input type='date' name='birth_date' placeholder='Date of Birth' value={this.state.birth_date} onChange={this.handleInput}/><br />
              	<button className="button button-primary" type='submit'>Submit</button>
            	</form>
            </div>
          </div>

        </div>
      );
    }
  };


export default RegisterContainer;
