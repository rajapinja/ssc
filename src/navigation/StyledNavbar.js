import { NavLink } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
// import { AuthProvider } from '../context/AuthContext';
// import {NavDropdown, Nav} from 'react-bootstrap'

const Navbar = () => {

  const {status, user} = useAuth();
  
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>           
      <NavLink
        to='/imdDisplay'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
         Service Request
      </NavLink>       
      <NavLink
        to='/ts'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Task Schedule
      </NavLink>
      <NavLink
        to='/wfs'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        WorkflowDisplay
      </NavLink>
      <NavLink
        to='/swl'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Skilled Workers
      </NavLink>
      <NavLink
        to='/wss'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Worker Services
      </NavLink>
      <NavLink
        to='/ad'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        AssignmentDetailScreen
      </NavLink>
      <NavLink
        to='/au'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          AssignmentDetailScreen
        </NavLink>
        <NavLink
        to='/etass'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Update Assignment
        </NavLink>
        <NavLink
        to='/tsms'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          TwilioSMS
        </NavLink>
        <NavLink
        to='/ff'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          First Flow
        </NavLink>
        <NavLink
        to='/wfd'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Work Flow Diagram
        </NavLink>
        <NavLink
        to='/un'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          UpdateNode
        </NavLink>
        <NavLink
        to='/register'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Register
        </NavLink>  
        <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Login
        </NavLink>    
       <NavLink
        to='/profile'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Profile
        </NavLink>   
        
    </nav>
  );
};
export default Navbar;
