import { Route, Routes } from 'react-router-dom';
import ImageDisplayScreen from '../screens/ImageDisplayScreen';
import TaskScheduleScreen from '../screens/TaskScheduleScreen';
import TwilioSMS from '../screens/TwilioSMS';
import UpdateTaskAssignment from '../screens/UpdateTaskAssignment';
import AssignmentDetailScreen from '../screens/AssignmentDetailScreen';
import WorkerServicesScreen from '../screens/WorkerServicesScreen';
import AssignmentStatusUpdateScreen from '../screens/AssignmentStatusUpdateScreen';
import SkilledWorkerList from '../screens/SkilledWorkerList';
import WorkflowDisplay from '../screens/WorkFlowScreen';
import UpdateNode from '../workflow/UpdateNode';
import Layout from '../navigation/Layout';
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Register from './Register';
import FirstFlow from '../workflow/FirstFlow';


const AppRoutes = () => {
  return (
    // <Router>
    <Routes>
      {/* Define your routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login />}/>
        <Route path='profile' element={<Profile />}/>     
        <Route path="imdDisplay" element={<ImageDisplayScreen />} />
        <Route path="etass" element={<UpdateTaskAssignment />} />
        <Route path="ts" element={<TaskScheduleScreen />} />
        <Route path="tsms" element={<TwilioSMS />} />
        <Route path="ad" element={<AssignmentDetailScreen />} />
        <Route path="wss" element={<WorkerServicesScreen />} />
        <Route path="asu" element={<AssignmentStatusUpdateScreen />} />
        <Route path="swl" element={<SkilledWorkerList />} />
        <Route path="wfs" element={<WorkflowDisplay />} />
        <Route path="un" element={<UpdateNode />} />
        <Route path="ff" element={<FirstFlow />} />        
      </Route>
    </Routes>
    // </Router>
  );
};

export default AppRoutes;
