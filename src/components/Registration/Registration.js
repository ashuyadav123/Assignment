import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 bg-white m-auto rounded rounded-3 wrapper">
          <h2 className="text-center pt-3">Sign Up</h2>
          <p className="text-center text-muted lead">It's free and takes a minute</p>
          <form  className="border border-2 border-primary p-5 rounded rounded-5">
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <div>
              <button className="btn btn-success w-100">Sign Up</button>
              <p className="text-center text-muted mt-2">
                When you Register by clicking the signup button, you agree to our
                <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
              </p>
              <p className="text-center">
                Already have an account?  <Link to="/Login">Sign-In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
