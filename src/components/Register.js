
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { SocialIcon } from 'react-social-icons';

const REGISTER_URL = '/api/register'; // matches the back-end webserver in the nodejs course.
//const Login = ({ setUser }) => {
const Register = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  //Error state if error occurs and success state if it's a success
  const [errMsg, setErrMsg] = useState('');  
  //Check for Login status
  const [status, setStatus] = useState("");
 
  const navigate = useNavigate();
  const userRef = useRef(); // allows to set focus on user input when component loads
  const errRef = useRef(); // allows to set focus on that when error occurs to allow screen readers to announce error for accessibility.

  useEffect(() => {
    //set focus when component loads
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // clear errMsg when user corrects the error in the user or pwd fields
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        axios.post(REGISTER_URL,
        JSON.stringify({ user, email, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
       ).then((response) => {                             
          if(response.data.message === 'User already exist'){
              setStatus(response.data.message);
              navigate('/register');
              setUser('');
              setPwd('');
              //setStatus('');
              setEmail('');
          }
          if(response.data.message === 'User created'){
              setStatus(response.data.message);
              navigate('/register');
              setUser('');
              setPwd('');
              //setStatus('');
              setEmail('');
          }  
          setStatus(response.data.message); 
       }); 
    }catch(err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Registration Failed');
      }
      setStatus(err);
      //errRef.current.focus();
    }   
  };
  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>Register</h5>
        <div className='form-row'>
          <label htmlFor='user' className='form-label'>
            user
          </label>
          <input
            type='text'
            className='form-input'
            id='user'
            ref={userRef}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            password
          </label>
          <input
            type='password'
            className='form-input'
            id='pwd'
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Register
        </button>&nbsp;&nbsp;
        {status === 'User created' ? <h5 style={{color:'green'}}>{status}</h5> : <h5 style={{color:'red'}}>{status}</h5>}

        <hr/>
        <center>
                <p className="estext">
                  Access social media
                </p>
               
                <div>
                  <SocialIcon network="facebook" url="https://facebook.com/" style={{ height: 35, width: 35 }} />&nbsp;&nbsp;
                  <SocialIcon network="twitter" url="https://twitter.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;
                  <SocialIcon network="google" url="https://google.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;
                  <SocialIcon network="whatsapp" url="https://whatsapp.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;
                  <SocialIcon network="github" url="https://github.com/" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;
                  <SocialIcon network="linkedin" url="https://linkedin.com/" style={{ height: 35, width: 35 }}/>
                </div>                
          </center>

      </form>      
    </section>
  );
};
export default Register;
