import React from 'react';
import { Link } from 'react-router-dom';

const LoginView = ({ fieldValues, handleChange, handleSubmit }) => {
  const { email, password } = fieldValues;

  return (
    <main className='main login'>
      <div className="container-600 px-4 py-md-5 py-3 w-100">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="font-weight-normal mb-4">Log in</h4>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              minLength='2'
              maxLength='127'
              required
              autoFocus
              id='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              minLength='6'
              maxLength='127'
              required
              id='password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/account/register">Register</Link>
            <button type="submit" className="btn btn-color px-4">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginView;
