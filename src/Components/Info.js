import React from 'react';

const Info = props => {

	return (

            <div className="infoPanel">
                  <h3>Help</h3>
                  <hr className="horizontal spaced" />
                  <div className="item-blk">
                        <div><a href="#">Ask Your Instructor a Question</a></div>
                        <p>Questions are submitted to your instructor</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Search the Student Guides</a></div>
                        <p>Find answers to common questions</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Report a Problem</a></div>
                        <p>Tell us about any errors</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Chat with the support team</a></div>
                        <p>Live chat with the support team!</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Support Hotline</a></div>
                        <p>0800 123 456 7893</p>
                  </div>

            </div>
	)
}
export default Info;