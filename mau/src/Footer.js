import mau_pic_footer from './mau_pic_footer.jpg';
import location from './location.png';
import mau_logo from './mau_logo.png';
import { Link } from "react-router-dom";


const Footer = () => {
    return ( 
        <div className="Footer-Section" styles={{ backgroundImage:`url(${mau_pic_footer})` }}>
           <div >
          
           
            <div className="Footer-Container">
               <div className="Footer-Content">
                  <h4>Quick Links</h4>
                  <nav className='Nav-Footer'>
                    <div> <Link to='/'>Home </Link></div>
                    <div> <Link to='/'>Admission </Link></div>
                    <div> <Link to='/'>Academic</Link></div>
                    <div> <Link to='/'>Service</Link></div>
                    <div> <Link to='/'>Campus Life </Link></div>
                    <div> <Link to='/'>Portal </Link></div>
                    
                  </nav>
               </div>
               <div className="Footer-Content">
                  <h4>Quick Links</h4>
                  <nav className='Nav-Footer'>
                    <div> <Link to='/'>Faculties </Link></div>
                    <div> <Link to='/'>Colleges </Link></div>
                    <div> <Link to='/'>Centres</Link></div>
                    <div> <Link to='/'>Schools</Link></div>
                    <div> <Link to='/'>Unit </Link></div>
                    <div> <Link to='/'>R and D </Link></div>
                  
                  </nav>
               </div>
               <div className="Footer-Content">
                  <h4>Contact Info</h4>
                  <nav className='Nav-Footer'>
                    <div> <p>Modibbo Adama University 
                    Yola, <br></br>PMB 2435 Yola, Adamawa State </p> </div>
                    <div> <Link to='/'>info@mau.edu.ng </Link></div>
                    <div> <Link to='/'>09033333333</Link></div>
                    <div>
                       <div>
                     
                       </div>
                    
                    <img className='' src={mau_logo} alt="" srcset="" width='50px' height='50px' />
                    </div>
                   
                  
                  </nav>
               </div>
               <div className="Footer-Content">
                  <h4 className='Site-Map-Header'>Site Map</h4>
                 <div> <img className='Location-Img' src={location} alt="" srcset="" width='200px' height='200px' /></div> 
                  </div>
                  <div className="Footer-Content-Powered" >
                     <h5>Powered by MAU Software Unit</h5>
                  </div>
               </div>
            </div>
        </div>
     );
}
 
export default Footer;