
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import logo from '../images/mypic.jpg';
import video1 from '../images/Shopping_Progress_01.mp4';
// import { base62_encode}  from '../utility/Utility';


const LOGOUT_URL = '/api/logout'; // matches the back-end webserver in the nodejs course.

const Profile = () => {

    const [user, setUser] = useState('');
    const [status, setStatus] = useState("");
    //const [showprofile, setShowprofile] = useState(false);   
    const [deci, setDeci] = useState('10');
    

    //const auth = useAuth();
    const {setAuth} = useAuth({});
    //const {user,setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    //get user
   const userInfo = localStorage.getItem('user');

    //let userInfo = JSON.parse(localStorage.getItem('user-info'));
    //console.log(userInfo);
    const handleLogout =(e) =>{          
        axios.post(
            LOGOUT_URL,
            { withCredentials: true }
        )
        
        //console.log({user:setAuth.user});
        //console.log(user);
        setAuth('');
        setStatus("logout");
        localStorage.clear();
        navigate('/login');
    }
    return(
        <section className='section'>
        <div id="profile" >        
            Welcome, {userInfo.toUpperCase()} <br></br>
            <span><img src={logo} alt="Logo" /></span>
            <center>
            <button 
                className='btn btn-block1' 
                onClick={handleLogout}>
                    Logout
            </button>
            <br/><video class="App-logo" src={video1} autoPlay="true" width="100" height="80"/> 
            
            </center>
        </div>
        </section>
    );
}

export default Profile;