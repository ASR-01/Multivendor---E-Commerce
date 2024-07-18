import React,{useState} from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className='LoginPage'>
      <div className='LoginContainer'>
        <div className='LoginLogo'>
          ShopMe
        </div>
        <div className='LoginTitle'>
          Welcome Back!
        </div>
        <div className='LoginSubTitle'>
          Please login to your account
        </div>
        <div className='LoginInputs'>
          <input type="email" className="EmailInput" placeholder="Enter your email" />
            <div className="PasswordContainer">
            <input
              type={showPassword ? "text" : "password"}
              className="PasswordInput"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="ShowPasswordButton"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <div className="ForgotPassword">Forgot password?</div>
          <button className="SubmitButton">Submit</button>
        </div>
        <button className="LoginGoogle">
          <FontAwesomeIcon icon={faGoogle} size='lg' /><span className='SigninMsg'> Sign in with Google</span>
        </button>
        <div className="LoginSignUp">
          New to ShopMe?
          <div className='SignupButton'>
            <span> Get Started </span>
            <span><FontAwesomeIcon icon={faArrowRight}/></span>
        </div>
        </div>
        
      </div>      
    </div>
  )
}

