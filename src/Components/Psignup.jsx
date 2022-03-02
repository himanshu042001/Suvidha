import React from 'react'
import { Link } from 'react-router-dom';
import '../css/signup.css'

export default function Psignup() {
    let myFunction = () =>{
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
  return (
    <div>
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto register">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">

                <div class="row px-5">
                    <div class="col-md-8 align-self-start c">
                        <h2>Resister As a Student</h2>
                    </div>
                    <div class="col-md-3 align-self-end">
                        <div class="btn-group">
                            <a href="student-signup.html" class="btn">Student</a>
                            <a href="#" class="btn  btn-outline-primary active">Teacher</a>
                        </div>
                    </div>
                </div>
                <br/>

                <form>


                    <div class="row px-3 mb-4">
                        <i class="fa fa-user fa-lg me-3 fa-fw" title="User Name"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="text" class="form-control" placeholder="Full Name" required />
                        </div>
                    </div>

                    <div class="row px-3 mb-4">
                        <i class="fa fa-envelope fa-lg me-3 fa-fw" title="Enter your email"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="email" class="form-control" placeholder="Email Address" required />
                        </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <i class="fa fa-mobile fa-lg me-3 fa-fw" title="Mobile Number"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="tel" class="form-control" placeholder="Mobile" required />
                        </div>
                    </div>

                    <div class="row px-3 mb-4">
                        <i class="fa fa-lock fa-lg me-3 fa-fw" title="Password"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="password" id="myInput" class="form-control" placeholder="Enter Your Password" required />
                        </div>
                        <div class="form-check d-flex justify-content-center mb-4 px-1">
                            &nbsp; <input type="checkbox" onClick={myFunction}/> &nbsp; Show Password
                        </div>

                    </div>

                    <div class="row px-3 mb-4">
                        <i class="fa fa-key fa-lg me-3 fa-fw" title="Confirm Password"></i>
                        <div class="form-outline flex-fill mb-0">
                            <input type="password" class="form-control" placeholder="Confirm Your Password" required />
                        </div>
                    </div>
                    <div class="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" class="btn btn-primary btn-block py-2" id="button">
                            <span class="font-weight-bold" data-toggle="tooltip" title="Register">Create your account</span>
                        </a>
                    </div>

            
                    <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div class="border-bottom w-100 ml-5"></div>
                        <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div class="border-bottom w-100 mr-5"></div>
                    </div>


                    <div class="form-group col-lg-12 mx-auto">
                        <a href="#" class="btn btn-primary btn-block py-2 btn-google" id="button">
                            <i class="fa fa-google mr-2"></i>
                            <span class="font-weight-bold">Continue with Google</span>
                        </a>
                        <a href="#" class="btn btn-primary btn-block py-2 btn-facebook" id="button">
                            <i class="fa fa-facebook mr-2"></i>
                            <span class="font-weight-bold">Continue with Facebook</span>
                        </a>
                    </div>


                    <div class="text-center w-100">
                        <p class="text-muted font-weight-bold">Already Registered? <a href="login.html" class="text-primary ml-2"><Link to="/ParentLogin" >Login</Link></a></p>
                    </div>

                </form>
            </div>
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row">
                        <p class="company"><img src="academy-logo.png" class="logo"/>Suvidha Foundation</p>
                    </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="teacher-signup-image.png" class="image"/> </div>
                </div>
            </div>
        </div>
        
    </div>
</div>

    </div>
  )
}
