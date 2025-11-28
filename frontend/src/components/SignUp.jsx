import React, {useState} from 'react'
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',

  });
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await axios.post()
  }
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-4">Create an Account</h3>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            name="fullName" onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email" onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            placeholder="Create a password"
            name="password" type="password" onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-enter password"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="terms" />
          <label className="form-check-label" htmlFor="terms">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
        <p>Already have an account? log in here</p>
      </form>
    </div>
  )
}

export default SignUp