import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import '../style.css';

class AddNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCreated: '',
      responseOne: '',
      responseTwo: '',
      responseThree: '',
      responseFour: '',
      responseFive: '',
      responseSix: '',
      responseSeven: '',
      responseEight: '',
      responseNine: ''
    }
  }

  handleInput = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
    console.log(this.state);
	}

  handleSubmit = (e) => {
		e.preventDefault();
    console.log(this.state, "this is state", this.props, "this is props");
		this.props.createForm(this.state.dateCreated, this.state.responseOne, this.state.responseTwo, this.state.responseThree, this.state.responseFour, this.state.responseFive, this.state.responseSix, this.state.responseSeven, this.state.responseEight, this.state.responseNine)  
	}

  render(){
    return(
      <div>
        <h5>New Form</h5>
          <form onSubmit={this.handleSubmit}>

            <h6>Please enter today's date.</h6>
            <input type="date" name="dateCreated" value={this.state.dateCreated} onChange={this.handleInput} /><br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>

            <label>Enter your response below</label>
            <input type="text" name="responseOne" value={this.state.responseOne} onChange={this.handleInput} /> <br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Enter your reponse below</label>
            <input type="text" name="responseTwo" value={this.state.responseTwo} onChange={this.handleInput} /> <br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Choose one of the following options</label>
            <input type="checkbox" name="responseThree" value={this.state.responseThree} onChange={this.handleInput} />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            <input type="checkbox" name="responseThree" value={this.state.responseThree} onChange={this.handleInput} />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            <input type="checkbox" name="responseThree" value={this.state.responseThree} onChange={this.handleInput} />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Enter your response below</label>
            <input type="text" name="responseFour" value={this.state.responseFour} onChange={this.handleInput} /> <br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Enter your reponse below</label>
            <input type="text" name="responseFive" value={this.state.responseFive} onChange={this.handleInput} /> <br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Choose one of the following options</label>
            <input type="text" name="responseSix" value={this.state.responseSix} onChange={this.handleInput} /> <br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Choose one of the following options</label>
            <input type="text" name="responseSeven" value={this.state.responseSeven} onChange={this.handleInput} /> <br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Choose one of the following options</label>
            <input type="text" name="responseEight" value={this.state.responseEight} onChange={this.handleInput} /> <br />

            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
              Pulvinar elementum integer enim neque volutpat ac.</h6>
            <label>Choose one of the following options</label>
            <input type="text" name="responseNine" value={this.state.responseNine} onChange={this.handleInput} /> <br />

            <button type="submit" className= "button button-primary">Submit</button>
          </form>
      </div>
    )
  }
}

export default AddNewForm;
