import React from 'react';
import { Link } from 'react-router-dom';

const RegisterView = ({ fieldValues, handleChange, handleSubmit }) => {
  const { firstName, lastName, email, password } = fieldValues;

  return (
    <main className='main register'>
      <div className="container-600 w-100 px-4 py-md-5 py-3">

        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h4 className="font-weight-normal mb-4">Create Account</h4>
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              minLength='2'
              maxLength='127'
              required autoFocus
              id='firstName'
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              minLength='2'
              maxLength='127'
              required
              id='lastName'
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              minLength='2'
              maxLength='127'
              required
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
            <Link to="/account/login">Sign in</Link>
            <button
              type="submit"
              className="btn btn-color px-3"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterView;
