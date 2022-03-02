import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Who.css';


function Who() {

  return (<>

    <h1 className='head'>Who Can Learn.</h1>
    <div className="Containerg">

      <div className="card">
        <div className="card-side front1">
          <div><h1>Child</h1></div>
        </div>
        <div className="card-side back1">
          <div style={{ textAlign: 'center' }}><h2 style={{textDecoration:'none'}}>"OLD MEN CAN MAKE WAR, BUT IT IS CHILDREN WHO WILL MAKE HISTORY."</h2><h5>Ray Merritt</h5><button className="cbtn" ><Link to="/Login" style={{ textDecoration: 'none', color: 'black' }}>Login as Child</Link></button></div>
        </div>
      </div>

      <div className="card">
        <div className="card-side front2">
          <div><h1>Teacher</h1></div>
        </div>
        <div className="card-side back2">
          <div style={{ textAlign: 'center' }}><h2 style={{textDecoration:'none'}}>"I AM NOT A TEACHER, BUT AN AWAKENER."</h2><h5>Robert Frost</h5><button className="cbtn" ><Link to="/TeacherLogin" style={{ textDecoration: 'none', color: 'black' }} >Login as Teacher</Link></button></div>
        </div>
      </div>

      <div className="card">
        <div className="card-side front3">
          <div><h1>Parent</h1></div>
        </div>
        <div className="card-side back3">
          <div style={{ textAlign: 'center' }}><h2 style={{textDecoration:'none'}}>" NOBODY ON EARTH CAN EVER LOVE YOU MORE THAN YOUR PARENTS. "</h2><h5>Anonymous</h5><button className="cbtn" ><Link to='/ParentLogin' style={{ textDecoration: 'none', color: 'black' }}>Login as Parent</Link></button>
          </div></div>
      </div>
    </div>
  </>
  )
}

export default Who;