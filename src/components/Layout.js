import { Outlet } from "react-router-dom";
import StyledNavbar from './StyledNavbar';
import logo from '../components/images/Logo_laraid.jpeg';



const Layout = () => {

    return (
        <main className="App">           
            <nav className="title">Prithvi Homes Elite Association<sup className="estext">Reg.256/2009</sup></nav><br></br>
            <header>
                <StyledNavbar />
            </header>
                <Outlet />                
            <center><span class="innovate"><span></span><img class="clogo" src={logo} alt="Logo" /> LARAID SOFTWARE SOLUTIONS <span class="caption">Innovation Explored...</span></span><sup class="incorporation">@U72900TG2022OPC167370</sup></center>
            <hr class="hr-layout"/>
            <footer className="estext"><center> *****copyright (Concept, Design, Architect and Solution) by <span class="incorporation">www.laraidsolutions.com</span> <sup class="incorporation"> @Raja Pinja</sup> <sub> <span class="startupIndia"> -: Startup India CERTIFICATE NO:<span class="certificate"> DIPP114845 </span>:-</span></sub>
            <br/> @Prithvihomes, Flat no 203, A-Block, Spring Field Colony, Jeedimetla(V), Quthbullapur (M), Hyderabad (Secunderabad) - 500 055. Telangana, INDIA. Phone +91 9347160365(M)*****</center> </footer>  
           
                    
        </main>
    )
}
export default Layout;