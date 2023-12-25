import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
      <form className="border border-2 border-primary p-5 rounded rounded-5">
        <h2>
          <span className="bi bi-person-fill" id="person"></span>
          <span id="login">Login Your Account</span>
        </h2>
        <div className="mb-2">
          <label className="form-label">
            <span id="user">User Name</span>
          </label>
          <div>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mb-2">
          <label className="form-label">
            <span id="pass">Password</span>
          </label>
          <div>
            <input type="password" className="form-control" />
          </div>
        </div>
        <div className="form-group mb-4 mt-2">
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <span id="check">Remember me</span>
          </label>
        </div>

        <div>
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
