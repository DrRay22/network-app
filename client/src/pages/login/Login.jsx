import React from 'react';
import { Link } from 'react-router-dom';
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Network</h1>
          <p>Welcome to Network App. We are helping you to network your world, one person at a time.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;