import React from 'react';
import profile from '../assets/profile.png';


const Profile = props => {

	return (
	  <div className="profile-stn">
            <div className="profile-header">
                  <img className='icon-lg'src={profile} alt="profile" />
                  <h4>Anonymous User</h4>
                  <button className="btn">Logout</button>
            </div>
            <hr className="slide-hr" />
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Notifications</a></li>
            <li><a href="#">Files</a></li>
            <li><a href="#">ePortfolios</a></li>
        </div>
	)
}
export default Profile;