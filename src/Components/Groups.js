import React from 'react';

const Groups = props => {

	return (

            <div className="infoPanel groups">
                  <h3>Groups</h3>
                  <hr className="horizontal spaced" />
                  <div className="item-blk">
                       <div><a href="#">Students</a></div>
                        <p>Connect with other students</p>
                  </div>
                   <div className="item-blk">
                       <div><a href="#">Tutors</a></div>
                        <p>Contact your tutors</p>
                  </div>
                   <div className="item-blk">
                       <div><a href="#">Teachers</a></div>
                        <p>Request a meeting with a teacher on campus</p>
                  </div>              
                  <hr className="horizontal spaced"/>
                  <p>All groups</p>
            </div>
	)
}
export default Groups;