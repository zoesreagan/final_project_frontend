import React, { Component } from 'react';
import '../style.css';

class AddNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCreated: "",
      responseOne: "",
      responseTwo: "",
      responseThree: "",
      responseFour: "",
      responseFive: "",
      responseSix: "",
      responseSeven: "",
      responseEight: "",
      responseNine: ""
    }
  }

  handleInput = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTrip(this.state.dateCreated, this.state.response_1, this.state.response_2, this.state.response_3, this.state.response_4, this.state.response_5, this.state.response_6, this.state.response_7, this.state.response_8, this.state.response_9)
	}

  render(){
    return(
      <h2>New Form</h2>
    )
  }

}

export default AddNewForm;
