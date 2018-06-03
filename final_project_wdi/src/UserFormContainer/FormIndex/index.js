import React from 'react';

import "../style.css";

const FormIndex = (props) => {
	const form = props.form

	const formList = form.map((form, i) => {
		return (
			<div key={form.id}>
				<div body key={form.id} className="form">
          <h2>My Dementia Directives</h2>
            <ul className="formList" id={form.id} key={i}>
              <h4>People with advancing dementia lose the ability to make decisions for
                themselves.<br />
                Their families need to make medical decisions for them.<br />
                Giving family members guidance about what kind of care you'd want if you
                were to develop worsening dementia can ease the burden of their decision
                making and make you feel more secure that you'll receive the care that you
                would want.<br />
                Your guidance today will help the people taking care of you in the future.</h4><br />
                 <li>My Dementia Directive Created: {form.date_created}</li>
                 <h5>Stage 1 -- Mild dementia</h5>
                 <h6>People may often lose ability to remember recent events in their lives.<br />
                     Routine tasks become difficult (such as cooking.) Some tasks can become more dangerous (such as driving.)<br />
                     If you were to be at this stage of dementia what level of medical care would you want for
                     yourself? </h6>
                  <h5>My wishes:</h5>
                 <li>{form.response_1}</li>
                 <h5>Stage 2 -- Moderate dementia</h5>
                 <h6>People lose the ability to have conversations, and communication becomes very limited.<br />
                   People lose the ability to understand what is going on around them.<br />
                   People require daily full-time assistance with dressing and sometimes toileting.<br />
                   If you were at this stage of dementia what level of medical care would you want? </h6>
                   <h5>My wishes:</h5>
                   <li>{form.response_2}</li>

                 <h5>Stage 3 -- Severe dementia</h5>
                 <h6>People are no longer able to recognize loved ones and family members. People may be
                   awake through the night, disruptive, and yelling.<br />
                   Some may be calm or serene most or all of the time, but many become angry and
                   agitated at times, and sometimes even violent toward people they love.<br />
                   People need round-the-clock help with all daily activities.</h6>
                   <h5>My wishes:</h5>
                   <li>{form.response_3}</li>

						<button className="button button-primary" onClick={props.renderEditForm}>Edit Form</button><br /><br />
						<button onClick={props.deleteForm}>Delete Form</button><br />
          </ul>
					</div>
        </div>
       )
     })

	   return (
		          <div className="userForm">
			             {formList}
		           </div>
	)
}

export default FormIndex;
