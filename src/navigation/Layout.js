import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logo from '../images/Logo_laraid.jpeg';

const Layout = () => {
  return (
    
    <div>
      <Header />
      <div className="content">
        <Outlet />       
      </div> 
      <Footer />
    </div>
  );
};

export default Layout;

