import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
// import { Button } from 'react-bootstrap';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faFacebookF, faTwitter, faWhatsapp, faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from 'react-social-icons';



const LOGIN_URL = '/api/login'; // matches the back-end webserver in the nodejs course.

 const Login = () => {

  const {setAuth} = useAuth({});
  //const {setAuth} = useContext(AuthContext);
  const navigate = useNavigate(); 
  const location = useLocation();
  const from = location.state?.form?.pathname || '/';

  const userRef = useRef(); // allows to set focus on user input when component loads
  const errRef = useRef(); // allows to set focus on that when error occurs to allow screen readers to announce error for accessibility.

  // User field state
  const [user, setUser] = useState('');
  // Password Field State
  const [pwd, setPwd] = useState('');
  // Error state if error occurs and success state if it's a success
  const [errMsg, setErrMsg] = useState('');
  //const [success, setSuccess] = useState(false);

  // Check for Login status
  const [Status, setStatus] = useState("");
  
  useEffect(() => {
    // set focus when component loads
    userRef.current.focus();
  }, []);

  
  useEffect(() => {
       // clear errMsg when user corrects the error in the user or pwd fields
    setErrMsg('');
  }, [user, pwd]);

  /*useEffect(()=>{
    console.log(setAuth);
  },[setAuth]);*/


  const handleSubmit = (e) => {
    e.preventDefault();    
    
    setUser('');
    setPwd('');
    // Using axios to submit to the back-end web server created in the node.js course:
    try {
       axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
       ).then((response) => {

          console.log(response.data);      
          //console.log(JSON.stringify(response)); // use stringify to avoid getting Obj{Obj}
          //const accessToken = response?.data?.accesstoken;
          //const roles = response?.data?.roles;
         // setAuth({ user, pwd, accessToken });
          //clear state and controlled inputs
          //need value attribute on inputs for this
          if(response.data.user === user){
            const accessToken = response.data.accesstoken;
            setAuth({ user, pwd, accessToken });           
            setUser(user);
            setStatus("login");
            navigate(from, { replace: true }); // replaces the success page for the login page. tkaes the user where they wanted to go previously.
          }else{
            setStatus(response.data.message);
           
          }
          setUser('');
          setPwd('');
          // setSuccess(true);
          // navigate(redirectpath, {replace : true});
          localStorage.setItem('user', response.data.user);
          console.log('Login page '+ localStorage.getItem('user'));
       }) ;
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) { 
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      //errRef.current.focus();
    }
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='username' className='form-label'>
            user
          </label>
          <input
            type='text'
            className='form-input'
            id='user'   
            ref={userRef}
            value={user}                
            onChange={(e) => setUser(e.target.value)}   
            autoComplete='off'
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
          login
        </button>
        <small><sub>Need an Account?</sub></small>&nbsp;&nbsp;
        <sub><span className="line">
          {/*put router link here*/}
          <Link to="/register">Sign Up</Link>
        </span></sub>
        <h5 style={{color:'red'}}>{Status}</h5>

      {/*Social media links for future Oauth2 login*/}
        <hr />
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
                {/*<div className="d-flex flex-row mb-3 justify-content-evenly social-media">
                  <Button className="social-icon facebook">
                    <FontAwesomeIcon icon={faFacebookF}/>                    
                  </Button>&nbsp;&nbsp;&nbsp;
                  <Button className="social-icon twitter">                   
                    <FontAwesomeIcon icon={faTwitter}/>
                  </Button>&nbsp;&nbsp;&nbsp;
                  <Button onClick="https://api.whatsapp.com/send?text=[post-title] [post-url]" className="social-icon whatsapp">                   
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Button>&nbsp;&nbsp;&nbsp;
                  <Button className="social-icon google">                   
                    <FontAwesomeIcon icon={faGoogle}/>
                  </Button>&nbsp;&nbsp;&nbsp;
                  <Button className="social-icon github">                   
                    <FontAwesomeIcon icon={faGithub}/>
                  </Button>
              </div>*/}
          </center>
      </form>
      
    </section>
  );
};
export default Login;
