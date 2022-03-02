import React from "react";
// import "../css/TeacherDashboard.css";
import '../css/TDashboard.css'
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  return (
    <>
      <div id="ctn100">
        <div id="hdr80">
          <div id="in20">
            <h2 id="wlm158">
              Welcome Aboard, <sn>XYZ</sn>
            </h2>
            <Link to="/" style={{ textDecoration: 'none' }}><button id="lg14" alt="logout" title="Logout"></button></Link>
          </div>
        </div>

        <div id="sec81">
          <div id="in21">
            <Link to="" id="nm203" style={{ textDecoration: 'none' }}>Teacher Dashboard</Link>
          </div>
        </div>

        <div id="con50">
          <div id="Cls58">
            <Link to="/TProfile" className="tg11" style={{ textDecoration: 'none' }}>Profile</Link>
            <Link to="/TeacherDashboard" className="tg11" style={{ textDecoration: 'none' }}>Dashboard</Link>
            <Link to="/Button" className="tg11" style={{ textDecoration: 'none' }}>Create course</Link>
            <Link to="/Mycourses" className="tg11" style={{ textDecoration: 'none' }}>My courses</Link>
            <Link to="" className="tg11" style={{ textDecoration: 'none' }}>Students</Link>
            <Link to="/Assignment" className="tg11" style={{ textDecoration: 'none' }}>Assignments</Link>
            <Link to="" className="tg11" style={{ textDecoration: 'none' }}>Discussions</Link>
            <Link to="" className="tg11" style={{ textDecoration: 'none' }}>Certificates</Link>
            <Link to="/" className="tg11" style={{ textDecoration: 'none' }}>Logout</Link>
          </div>
          <div id="ot59">
            <div id="on42">
              <h2>Graphical Overview</h2>
              <div></div>
            </div>
            <div id="thr43">
              <h2>Students Enrolled</h2>
              <div></div>
              <button className="btn082"><Link to="" style={{ textDecoration: 'none', color: 'white' }}>View More</Link></button>
            </div>
            <div id="fou44">
              <h2>Marks Obtained</h2>
              <div></div>
              <button className="btn082"><Link to="" style={{ textDecoration: 'none', color: 'white' }}>View More</Link></button>
            </div>
            <div id="fiv45">
              <h2>Student Queries</h2>
              <div></div>
              <button className="btn082"><Link to="" style={{ textDecoration: 'none', color: 'white' }}>View More</Link></button>
            </div>
          </div>
        </div>
      </div>
      <button id="stky5101">
        <Link to="" style={{ textDecoration: 'none' }}></Link> {/*link of create courses should be attached here.*/}
      </button>
    </>
  );
};

export default TeacherDashboard;
