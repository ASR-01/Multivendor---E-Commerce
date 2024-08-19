import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEye, faEyeSlash, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      // FetchData Here and change the state of the Usercontext accordingly 
      const userData = {
        id: '123',
        name: 'John Doe',
        email: email,
      };
      dispatch({ type: 'LOGIN', payload: userData });
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='LoginPage'>
      <div className='BackHome' onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faChevronLeft} /> Home
      </div>
      <div className='LoginContainer'>
        <div className='LoginLogo'>ShopMe</div>
        <div className='LoginTitle'>Welcome Back!</div>
        <div className='LoginSubTitle'>Please login to your account</div>
        <div className='LoginInputs'>
          <input
            type="email"
            className="EmailInputLogin"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="PasswordContainer">
            <input
              type={showPassword ? "text" : "password"}
              className="PasswordInput"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button className="SubmitButtonLogin" onClick={handleLogin}>
            Submit
          </button>
        </div>
        <button className="LoginGoogle">
          <FontAwesomeIcon icon={faGoogle} size='lg' />
          <span className='SigninMsg'> Sign in with Google</span>
        </button>
        <div className="LoginSignUp">
          New to ShopMe?
          <div className='SignupButton' onClick={() => navigate('/signup')}>
            <span> Get Started </span>
            <span><FontAwesomeIcon icon={faArrowRight}/></span>
          </div>
        </div>
      </div>      
    </div>
  );
}

