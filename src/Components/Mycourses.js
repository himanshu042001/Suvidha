import React from "react";
import "../css/mycourses.css";
export default function Mycourses() {
  return (
    <>
        <div className="container oneth">
          <div className="">
            <h1 className="head-ing">Instructor name</h1>
            <h2 className="head-ing">My courses</h2>
          </div>

          <div className="row twoth">
            <div className="card col-lg-3 col-md-4 col-sm-6" style={{width: "18rem"}}>
            <img src="images/java.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <h6>Instructor name</h6>
              <p className="card-text">
                Learn Programming in efficient way. Master all your core
                concepts.
              </p>
              <a href="#" className="btn btn-primary">
                Update course
              </a>
            </div>
          </div>

          <div className="card col-lg-3 col-md-4 col-sm-6"style={{width: "18rem"}}>
          <img src="images/react.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Js</h5>
            <h6>Instructor name</h6>
            <p className="card-text">
              Learn Programming in efficient way. Master all your core concepts.
            </p>
            <a href="#" className="btn btn-primary">
              Update course
            </a>
          </div>
        </div>

        <div className="card col-lg-3 col-md-4 col-sm-6" style={{width: "18rem"}}>
          <img src="images/html.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">HTML</h5>
            <h6>Instructor name</h6>
            <p className="card-text">
              Learn Programming in efficient way. Master all your core concepts.
            </p>
            <a href="#" className="btn btn-primary">
              Update course
            </a>
          </div>
        </div>

        <div className="card col-lg-3 col-md-4 col-sm-6" style={{width: "18rem"}}>
          <img
            src="images/programming.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Data Structures and algorithms</h5>
            <h6>Instructor name</h6>
            <p className="card-text">
              Learn Programming in efficient way. Master all your core concepts.
            </p>
            <a href="#" className="btn btn-primary">
              Update course
            </a>
          </div>
        </div>

        <div className="card col-lg-3 col-md-4 col-sm-6" style={{width: "18rem"}}>
          <img src="images/css.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">CSS</h5>
            <h6>Instructor name</h6>
            <p className="card-text">
              Learn Programming in efficient way. Master all your core concepts.
            </p>
            <a href="#" className="btn btn-primary">
              Update course
            </a>
          </div>
        </div>

        <div className="card col-lg-3 col-md-4 col-sm-6"style={{width: "18rem"}}>
          <img src="images/python.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Programming using Python</h5>
            <h6>Instructor name</h6>
            <p className="card-text">
              Learn Programming in efficient way. Master all your core concepts.
            </p>
            <a href="#" className="btn btn-primary">
              Update course
            </a>
          </div>
        </div>
        </div>
      </div>
      <br/><br/>
    </>
  );
}