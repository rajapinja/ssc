// App.js
import React from 'react';
import { BrowserRouter as Router, Outlet, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import '../css/navbar.css';

const AppNavigator = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ts">TaskScheduleScreen</Link>
            </li>
            <li>
              <Link to="/asu">StatusUpdate</Link>
            </li>            
            <li>
              <Link to="/etass">EditTaskAssignment</Link>
            </li>
            <li>
              <Link to="/ad">AssignmentDetails</Link>
            </li>
            <li>
              <Link to="/wss">WorkerServices</Link>
            </li>
            <li>
              <Link to="/swl">SkilledWorkers</Link>
            </li>
            <li>
              <Link to="/wfs">WorkFlowScreen</Link>
            </li>
            <li>
              <Link to="/un">UpdateNode</Link>
            </li>
            <li>
              <Link to="/tsms">TwilioSMS</Link>
            </li>
          </ul>
        </nav>
        <AppRoutes/>
       <Outlet/>
       {/* <Footer/> */}
      </div>
    </Router>
  );
};

export default AppNavigator;
