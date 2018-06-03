import React, {Component} from "react";


const LearnMorePage = (props) => {
  console.log("learn more being rendred");
  return (
            <div className="container">
              <div className="row">
                <div className="twelve columns">
                  	<h2>More Information</h2>
                  <p>Over the years of their diagnosis, people with dementia related to Alzheimer's Disease, Parkinson's Disease and other neurological conditions
                    lose their memory and completely lose the ability to understand what's
                    going on around them.</p>
                    <h5><em>There is no known cure for dementia.</em></h5>
                    <h5>One of the most important questions to consider is: </h5>
                    <h4>What kind of medical care would you want if
                        you were to develop worsening dementia?</h4>
                </div>
              </div>
            </div>
  )
}


export default LearnMorePage;
