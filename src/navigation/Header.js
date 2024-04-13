import Navbar from './Navbar';
import logo from '../images/Logo_laraid_1.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>  
      <div class="headerClass"><center>SKILLED SQUAD CENTRAL (SSC) <sup class="product"> @LARAID SOFTWARE SOLUTIONS </sup></center></div>
      
      <div className="nav-area">
        <Navbar />
        <Link to="/" >
            <span className="logo"><img src={logo} alt="Logo" width='24px' height='24px'/></span>
        </Link>  
      </div>
            
    </header>
  );
};

export default Header;