import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <nav className="d-flex justify-content-between align-items-center px-3 py-2" style={{ backgroundColor: 'beige' }}>
            <a href="/" className="text-decoration-none fw-bold ps-2">Home</a>
            <button className="btn btn-primary pe-2" onClick={props.onSignupClick}>Signup/Login</button>
        </nav>
    </div>
  )
}

export default Navbar