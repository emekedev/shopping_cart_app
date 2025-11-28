import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
// import './App.css'
import SignUp from './components/SignUp'

function App() {
const[showSignUp, setSignUp] = useState(false);
const handleShowSignUp = ()=>{
  setSignUp(true)
}
  return (
    <div>
      <Navbar onSignupClick={handleShowSignUp} />
      {showSignUp && <SignUp />}
    </div>
    
  )
}

export default App
