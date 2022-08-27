import news_pic1 from './news_pic1.jpeg';
import mau_cover from './mau_cover.jpg';
import newsbackground from './newsbackground.jpg';
import fmc from './fmc.jpeg';
import matric from './matric.jpeg';
import  './Detail_News.css';
const All_News = () => {
    return ( 
        <div>
            <div className='News_Background_Container' styles={{ backgroundImage:`url(${newsbackground})` }}>
                    <div className='hype'>
                        <span className='Background_Header_News_Title'>News</span><br></br>
                        <p className='Whats-happening'>What is happening at Modibbo Adama University ?</p>
                    </div>
               
            </div>
            <div className='Other-News'>
                <div><span className='Similar-News'>Trending News</span></div>
                <div className='Other-News-Cards'>
                    <div className='Other-News-Cards-Content'>
                        <div className='Other-News-Cards-Img-Holder1'><img src={matric} alt="" srcset="" height='250px' width='100%' /></div>
                        <div className='Other-News-Cards-Heading'>
                        <span className='date-news'>Tuesday, Aug 19 2022</span>
                        <p className='all-new-individual-title'>MAU Admitted 400 students into The undergraduate Programmes</p><br />
                        {/* <span className='all-news-content'>The Modibbo Adama University, Yola, has admitted 3,141 students for the 2020/2021 academic session.
                             Vice Chancellor of the University, Prof Abdullahi Tukur, who disclosed this on Saturday, said the number falls short of the 4,755 n
                             ew students that the University has capacity for.</span> */}
                        </div>
                    </div>
                    <div className='Other-News-Cards-Content'>
                        <div className='Other-News-Cards-Img-Holder1'><img src={fmc} alt="" srcset="" height='250px' width='100%' /></div>
                        <div className='Other-News-Cards-Heading'>
                        <span className='date-news'>Tuesday, Aug 19 2022</span>
                        <p className='all-new-individual-title'>MAU Teaching Hospital Set for Comissioning</p><br />
                        {/* <span className='all-news-content'>The Modibbo Adama University, Yola, has admitted 3,141 students for the 2020/2021 academic session.
                             Vice Chancellor of the University, Prof Abdullahi Tukur, who disclosed this on Saturday, said the number falls short of the 4,755 n
                             ew students that the University has capacity for.</span> */}
                        </div>
                    </div>
                    <div className='Other-News-Cards-Content'>
                        <div className='Other-News-Cards-Img-Holder1'><img src={newsbackground} alt="" srcset="" height='250px' width='100%' /></div>
                        <div className='Other-News-Cards-Heading'>
                        <span className='date-news'>Tuesday, Aug 19 2022</span>
                        <p className='all-new-individual-title'>MAU Admitted 400 students into The undergraduate Programmes</p><br />
                        {/* <span className='all-news-content'>The Modibbo Adama University, Yola, has admitted 3,141 students for the 2020/2021 academic session.
                             Vice Chancellor of the University, Prof Abdullahi Tukur, who disclosed this on Saturday, said the number falls short of the 4,755 n
                             ew students that the University has capacity for.</span> */}
                        </div>
                    </div>
                   
                   
                </div>
                <div>
                    <div className='All-news-search'>
                        <h1>All News</h1>
                        {/* <p className='all-news-p'>Looking for something specific? Check out the search and filter functions to help narrow it down.</p> */}
                   
                    {/* <div>
                        <label >Search News<br></br>
                            <input 
                            className='Search-news'
                            type='search'
                            placeholder='Search news'/>
                        </label>
                    </div> */}
                    </div>
                    <div className='all-news-section-2'>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${newsbackground})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${newsbackground})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${matric})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${newsbackground})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${newsbackground})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${matric})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${newsbackground})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${newsbackground})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                        <div className='all-news-single-card' styles={{ backgroundImage:`url(${matric})` }}>
                            <div className='all-news-single-card-content-wrapper'>
                                 <p className='all-news-single-card-title'>MAU Admitted 400 students into The undergraduate Programmes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default All_News;