import React, { Component } from 'react';
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
	}

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.createForm(this.state.dateCreated, this.state.responseOne, this.state.responseTwo, this.state.responseThree, this.state.responseFour, this.state.responseFive, this.state.responseSix, this.state.responseSeven, this.state.responseEight, this.state.responseNine)
	}

  render(){
    return(
      <div>
        <h2>My Dementia Directives</h2>
          <form onSubmit={this.handleSubmit}>
            <h3>Why it's important to express your wishes</h3>
              <h4>People with advancing dementia lose the ability to make decisions for
                themselves.<br />
                Their families need to make medical decisions for them.<br />
                Giving family members guidance about what kind of care you'd want if you
                were to develop worsening dementia can ease the burden of their decision
                making and make you feel more secure that you'll receive the care that you
                would want.<br />
                Your guidance today will help the people taking care of you in the future. </h4>
            <h5>Please enter today's date.</h5>
            <input type="date" name="dateCreated" value={this.state.dateCreated} onChange={this.handleInput} /><br />
            <h5>When answering these questions below, keep these responses in mind:</h5>
            <ul>
              <li><b>To live for as long as I could.</b><br />
                    I would want full efforts to prolong my life, including efforts to restart my heart if it stops beating. </li>
              <li><b> To receive treatments to prolong my life, but if my heart stops beating or I can’t breathe on my own then do not shock my heart to restart it (DNR) and do not place me on a breathing machine.</b><br /> Instead, if either of these happens, allow me to die peacefully. Reason why: if I took such a sudden turn for the worse then my
                      dementia would likely be worse if I survived, and this would not be an acceptable quality of life for me. </li>
              <li><b>To only receive care in the place where I am living.<br />
                      I would not want to go to the hospital even if I were very ill,
                      and I would not want to be resuscitated (DNR).</b><br />
                      If a treatment, such as antibiotics, might keep me alive longer and could be given in
                      the place where I was living, then I would want such care.<br />
                      But if I continued to get worse, I would not want to go to an emergency room or a hospital. Instead, I
                      would want to be allowed to die peacefully. <br />
                      Reason why: I would not want the possible risks and trauma which can come from being in the hospital. </li>
              <li><b>To receive comfort-oriented care only, focused on relieving my suffering such as pain, anxiety, or breathlessness.</b><br />
                    I would not want any care that would keep me longer.</li>
            </ul>


            <h5>Stage 1 -- Mild dementia</h5>
            <h6>People may often lose ability to remember recent events in their lives.<br />
                Routine tasks become difficult (such as cooking.) Some tasks can become more dangerous (such as driving.)<br />
                If you were to be at this stage of dementia what level of medical care would you want for
                yourself? </h6>

            <label>Enter your response below</label>
            <textarea  name="responseOne" value={this.state.responseOne} onChange={this.handleInput} /> <br />

            <h5>Stage 2 -- Moderate dementia</h5>
            <h6>People lose the ability to have conversations, and communication becomes very limited.<br />
              People lose the ability to understand what is going on around them.<br />
              People require daily full-time assistance with dressing and sometimes toileting.<br />
              If you were at this stage of dementia what level of medical care would you want? </h6>

            <label>Enter your reponse below</label>
            <textarea name="responseTwo" value={this.state.responseTwo} onChange={this.handleInput} /> <br />

            <h5>Stage 3 -- Severe dementia</h5>
            <h6>People are no longer able to recognize loved ones and family members. People may be
              awake through the night, disruptive, and yelling.<br />
              Some may be calm or serene most or all of the time, but many become angry and
              agitated at times, and sometimes even violent toward people they love.<br />
              People need round-the-clock help with all daily activities.</h6>
            <label>Enter your response below</label>
            <textarea name="responseThree" value={this.state.responseThree} onChange={this.handleInput} /><br />


            <button type="submit" className= "button button-primary">Submit</button>
          </form>
      </div>
    )
  }
}

export default AddNewForm;
