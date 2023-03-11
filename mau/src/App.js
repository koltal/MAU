import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import mau_logo from './mau_logo.png';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import AboutMau from './AboutMau';
import AboutLeadership from './AboutLeadership';
import Detail_News from './Detail_News';
import CampusLife from './CampusLife';
import Central_Lab from './Central_Lab';
import All_News from './All_News';
import Admission from './Admission';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='Overal-Header-Section'>
      <div className="Header-Section" >
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
          </div>
            <div className="Nav-Links">
                <nav>
                <Link to='/admis'>Admission </Link>
                    <Link to='/about'>About </Link>
                    <Link to='/leadership'>Leadership</Link>
                    <Link to='/admission'>Admissions</Link>
                    <Link to='/facilities'>Facilities</Link>
                    <Link to='/detailNews'>News</Link>
                    <Link to='/'>Campus life</Link>
                    <Link to='/allnews'>All News</Link> 
                </nav>
            </div>
        </div>
        <Routes>
          <Route path='/admis' element={<Admission/>}/>
          <Route path='/about' element={<AboutMau/>}/>
          <Route path='/admission' element={<Main/>}/>
          <Route path='/facilities' element={<Central_Lab/>}/>
          <Route path='/leadership' element={<AboutLeadership/>}/>
          <Route path='/detailNews' element={<Detail_News/>}/>
          <Route path='/allnews' element={<All_News/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
