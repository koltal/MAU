import mau_logo from './mau_logo.png';
import {  Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="Header-Section">
            <div className="Nav-Logo">
            <div className='Logo-Content'>
                <img src={mau_logo} alt="" srcset=""width='90px' height='90px' />
                <h3>MODIBBO ADAMA<br></br>UNIVERSITY YOLA<br></br>
                <span className='Established'>Established 1981</span></h3>
             </div>
                <div className="Sub-Links">
                <Link to='/'>Download </Link>
                    <Link to='/'>Career </Link>
                    <Link to='/'>Alumni</Link>
                    <Link to='/'>Gallery</Link>
                    <Link to='/'>R & D</Link>
                    <Link to='/'>OER</Link>
                    <Link to='/'>Login</Link>
                </div>
            </div>
            <div className="Nav-Links">
                <nav>
                <Link to='/'>Home </Link>
                    <Link to='/'>About </Link>
                    <Link to='/'>Academics</Link>
                    <Link to='/'>Admissions</Link>
                    <Link to='/'>Facilities</Link>
                    <Link to='/'>Portal</Link>
                    <Link to='/'>Campus life</Link>
                    <Link to='/'>Intervention</Link> 
                </nav>
            </div>
        </div>
     );
}
 
export default Header;