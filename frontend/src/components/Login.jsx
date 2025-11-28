import React, {useState} from 'react';
import React from 'react'

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e)=>{
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
     <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>

      <form onSubmit={handleSubmit}>
        
        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input 
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>

      </form>
    </div>
  )
}

export default Login