import React from 'react';

import "../style.css";

const FormIndex = (props) => {
	const form = props.form
	console.log(form, "this is the form");

	const formList = form.map((form, i) => {
		return (
			<div key={form.id}>
				<div body key={form.id} className="form">
            <ul className="formList" id={form.id} key={i}>
                 <li>Date Created: {form.date_created}</li>
                 <li>{form.response_1}</li>
                 <li>{form.response_2}</li>
                 <li>{form.response_3}</li>
                 <li>{form.response_4}</li>
                 <li>{form.response_5}</li>
                 <li>{form.response_6}</li>
                 <li>{form.response_7}</li>
                 <li>{form.response_8}</li>
                 <li>{form.response_9}</li>

						{/* <button className="button button-primary" onClick={props.renderEditTripForm}>Edit Trip </button><br /><br /> */}
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
