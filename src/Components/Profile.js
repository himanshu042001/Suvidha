import React, { Component } from 'react';
import "../profile.css"
export default class Profile extends Component {
  render() {
    return <div>
        <div className="profile-nav" >
            <div className="profile-nav">
                <img src="https://cdn.kastatic.org/images/avatars/svg/blobby-green.svg" style={{width:"100px"}} alt=""/ > 
                <div>
                <h1>User007</h1>
                    <a href="/" className="pb">Pic a username</a>
                    <a href="/"className="pb">Add your bio</a>
                </div>
            </div>
            <div>
                <button className="pbtn">Edit Profile</button>
            </div>
        </div>
        <div className="mystuff">
            <h4>MY STUFF</h4>
            <ul  >
                <li><a href="/" className="active">Courses</a></li>
            </ul>
            <h4>MY ACCOUNT</h4>
            <ul>
                <li><a href="/">Progress</a></li>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Teacher</a></li>
            </ul>
            {/* do some clever stuff */}
        </div>
    </div>;
  }
}
