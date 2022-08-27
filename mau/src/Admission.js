import news_pic1 from './news_pic1.jpeg';
import mau_cover from './mau_cover.jpg';
import './Admission.css';
import newsbackground from './newsbackground.jpg';
import fmc from './fmc.jpeg';
import Student_Gown from './Student_Gown.jpg';
import matric from './matric.jpeg';
// import  './Detail_News.css';
const Admission = () => {
//     const endPoint ='https://jsonplaceholder.typicode.com/posts';

//    async componentDidMount(){
//     const result = await axios.get(endPoint);
//     console.log(result);
//     }
    return ( 
        <div>
            <div className='Admission_Background_Container' styles={{ backgroundImage:`url(${Student_Gown})` }}>
                    <div className='hype'>
                        <span className='Admission_Header_Title'>Modibbo Adama University Admissions</span><br></br>
                        <p className='Admission-Note'>Whatever your calling, we’ll prepare you to make a difference in the lives of others through work, service and leadership.</p>
                    </div>
               
            </div>
            <div>
                
                <div className='Admission-Cards'>
                    

                    <div className='Admission-Cards-Content'>
                        <div className='Admission-Cards-Heading'>
                        <span className='Admission-individual-title'>Undergraduate Admissions</span><br />
                        <p>Get started</p>
                       </div>
                    </div>
                    <div className='Admission-Cards-Content'>
                        <div className='Admission-Cards-Heading'>
                        <span className='Admission-individual-title'>Postgraduate  Admissions</span><br />
                        <p>Get started</p>
                       </div>
                    </div>
                    <div className='Admission-Cards-Content'>
                        <div className='Admission-Cards-Heading'>
                        <span className='Admission-individual-title'>Distance Learning Admissions</span><br />
                        <p>Get started</p>
                       </div>
                    </div>
                    <div className='Admission-Cards-Content'>
                        <div className='Admission-Cards-Heading'>
                        <span className='Admission-individual-title'>Sandwich Admissions</span><br />
                        <p>Get started</p>
                       </div>
                    </div>
                    <div className='Admission-Cards-Content'>
                        <div className='Admission-Cards-Heading'>
                        <span className='Admission-individual-title'>Predegree/IJMB Admissions </span><br />
                        <p>Get started</p>
                       </div>
                    </div>
                    <div className='Admission-Cards-Content'>
                        <div className='Admission-Cards-Heading'>
                        <span className='Admission-individual-title'>Consultancy  Admissions </span><br />
                        <p>Get started</p>
                       </div>
                    </div>
                   
                   
                </div>
              
            </div>
        </div>
     );
}
 
export default Admission;