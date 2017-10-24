import React from 'react';

const Info = props => {

	return (

            <div className="infoPanel">
                  <h3>Help</h3>
                  <hr />
                  <div className="item-blk">
                        <div><a href="#">Ask Your Instructor a Question</a></div>
                        <p>Quesetions are submitted to your instructor</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Search the Canvas Guides</a></div>
                        <p>Find answers to common questions</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Report a Problem</a></div>
                        <p>If Canvas misbehaves, tell us about it</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Chat with Canvas Support</a></div>
                        <p>Live chat with Canvas Support!</p>
                  </div>
                  <div className="item-blk">
                        <div><a href="#">Canvas Support Hotline</a></div>
                        <p>0800 001 469 9023</p>
                  </div>

            </div>
	)
}
export default Info;