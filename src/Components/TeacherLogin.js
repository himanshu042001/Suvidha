import React from "react";
import "../css/Login.css";
import a from '../images/login-image.svg'
import b from '../images/academy-logo.png'
import { Link } from "react-router-dom";
const TeacherLogin = () => {
  return (
    <>
    <div id="bg4189">
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5  mx-auto">
        <div className="carde card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row">
                  <p>
                    <img
                      src={b}
                      className="logo"
                      alt="academy-logo"
                    />
                    Suvidha Foundation
                  </p>
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img
                    src={a}
                    className="image"
                    alt="login-iimage"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3">
                  <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                  <div className="google text-center mr-3">
                    <div className="fa fa-google"></div>
                  </div>
                  <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook"></div>
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line"></div>
                  <small className="or text-center">Or</small>
                  <div className="line"></div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input"
                    />
                    <label for="chk1" className="custom-control-label text-sm">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="ml-auto mb-0 text-sm">
                    Forgot Password?
                  </a>
                </div>
                <div className="row mb-3 px-3">
                  <Link to="/TeacherDashboard" className="btn btn-blue text-center">
                    {/* <button type="submit"  > */}
                      Login
                    {/* </button> */}
                  </Link>
                </div>
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Don't have an account?
                    <Link to='/Tsignup' className="text-danger">
                      Register
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default TeacherLogin;
