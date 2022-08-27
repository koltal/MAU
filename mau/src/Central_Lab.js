import  './Detail_News.css';
import dir_lab from './dir_lab.jpg';
import central_lab from './central_lab.jpeg';
const Central_Lab = () => {
    return ( 
        <div className='Central-Lab-Container'>
            <div className='Lab-Display-Image' styles={{ backgroundImage:`url(${central_lab})` }}>
               
            </div>
            <div className='Hover-Name-Lab' ><span >Central Laboratory</span></div>
            <div className='Welcome-Wrapper'>
                <div className='dir_lab_image_holder'>
                    <img src={dir_lab} alt="" srcset="" width='96%' height='300px'/>
                <div>
                    <span>Dr James Hamuel</span><br></br>
                    <span>Director Central Laboratory</span><br></br>
                    <span>Email:</span><br></br>
                    <span>Phone No:</span>
                </div>
                </div>
                <div className='About_Lab_Note'>
                    <h2>About the Central Laboratory</h2>
                    <p>The Central Laboratory of the Modibbo Adama University, Yola was established in order to offer effective and efficient services with great flexibility, efficient management, and excellent technical and scientific standards. The laboratory is equipped with state of the art facilities divided into 5 specialized units which include Biochemical and Toxicological, Analytical Chemistry and Quality Control, Geophysics and Geochemical, Biophysics and Material Science and Microbiology and Molecular Biology units to cater for the diverse research needs of the academic and research communities in various areas of science, health, agriculture and engineering. We thrive to meet your research needs through timely and efficient professional approach. You are therefore very much welcome to patronize our services.</p>
                </div>
            </div>
            <div className='Vision-Mission-Container'>
                <div>
                    <span>Vision</span>
                    <p>To be a leading center for advanced research that will spear-head ground-breaking novel scientific and technological discoveries and innovations for an all-encompassing national development.</p>
                </div>
                <div>
                    <span>Mission</span>
                    <p>To provide a multidisciplinary, multifaceted and inclusive approach to advanced research for the attainment of highest research potentials in science and technology for a knowledge- driven socio-economic and capital development of the nation.</p>
                </div>
            </div>
            <div>
                <div>
                    <div><h2>Various Specialized Laboratory Unit & Services</h2></div>
                    <div>1. Biochemical and Toxicological Laboratory</div>
                </div>
            </div>
        </div>
     );
}
 
export default Central_Lab;