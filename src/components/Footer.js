import logo from '../images/Logo_laraid.jpeg';
import '../css/Footer.css'; // Import CSS file for styles

const footerStyle = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  height: '50px', // Reduced height
  backgroundColor: '#f8fafc',
  color: '#333',
  textAlign: 'center',
  padding: '5px', // Reduced padding
  zIndex: '2',
};

const Footer = () => {
  return (
    <div style={footerStyle} className="footer-container">
      <footer>
        <div className="footer-content">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="company-info">
            <span>LARAID SOFTWARE SOLUTIONS</span>
            <sup className="tagline">Innovation Explored...</sup> {/* Use sup for tagline */}
          </div>
        </div>     
        <div className="address-info">
          <span>Concept, Design, Architect and Solution by www.laraidsolutions.com <sup>@Raja Pinja</sup></span>
          <br/>
          <span>@Prithvihomes, Flat no 203, A-Block, Spring Field Colony, Jeedimetla(V), Quthbullapur (M),Hyderabad (Secunderabad) - 500 055. Telangana, INDIA.</span>
          <span> Phone +91 9347160365(M)</span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
