import React from 'react';
import './footer.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// icons 
import { AiOutlineAlignRight, AiOutlineLine, AiOutlinePlus, AiOutlinePlusCircle, AiOutlinePlusSquare, AiOutlineRight } from 'react-icons/ai'

// images
import Img1 from '../Images/card1.png'
import Img2 from '../Images/card2.png'
import Img3 from '../Images/card3.png'
import Img4 from '../Images/card4.png'

function Footer(props) {
       return (
              <div style={{ margin: "150px, 0", paddingLeft: '0', paddingRight: "0" }} className='container section'>
                     <div className="father-div">
                            <div className="top-tables">
                                   <b>In Progress</b>
                                   <div className="buttons-div">
                                          <button className='button'>Show All Progress  <AiOutlineRight /></button>
                                   </div>
                            </div>
                            <div className="table">
                                   <div className="heder">
                                          <p>Product Name</p>
                                          <p>Stage of sales cycle</p>
                                          <p>Estimated negotiation time</p>
                                          <p>Estimated Commission</p>
                                          <p></p>
                                          <p></p>
                                   </div>
                                   <div className="tbody">
                                          <div className="card-tbd">
                                                 <div className="tbd-lf">
                                                        <img src={Img1} alt="#" />
                                                        <h1>Responsible Design and Production</h1>
                                                 </div>
                                                 <div className="tbd-lf-2">
                                                        <button className='button is-outline-warning text-yellow-200'>Initial</button>
                                                 </div>
                                                 <span className='tbd-lf-3'>12 weeks</span>
                                                 <span className='tbd-lf-4'>5K+</span>
                                                 <a href='#' className='tbd-lf-5'>Activities</a>
                                                 <label className='tbd-lf-6'><button><AiOutlinePlusSquare />New Leads</button></label>

                                          </div>
                                          <div className="card-tbd">
                                                 <div className="tbd-lf">
                                                        <img src={Img1} alt="#" />
                                                        <h1>Responsible Design and Production</h1>
                                                 </div>
                                                 <div className="tbd-lf-2">
                                                        <button className='button is-outline-warning text-yellow-200'>Initial</button>
                                                 </div>
                                                 <span className='tbd-lf-3'>12 weeks</span>
                                                 <span className='tbd-lf-4'>5K+</span>
                                                 <a href='#' className='tbd-lf-5'>Activities</a>
                                                 <label className='tbd-lf-6'><button><AiOutlinePlusSquare />New Leads</button></label>

                                          </div>
                                          <div className="card-tbd">
                                                 <div className="tbd-lf">
                                                        <img src={Img1} alt="#" />
                                                        <h1>Responsible Design and Production</h1>
                                                 </div>
                                                 <div className="tbd-lf-2">
                                                        <button className='button is-outline-warning text-yellow-200'>Initial</button>
                                                 </div>
                                                 <span className='tbd-lf-3'>12 weeks</span>
                                                 <span className='tbd-lf-4'>5K+</span>
                                                 <a href='#' className='tbd-lf-5'>Activities</a>
                                                 <label className='tbd-lf-6'><button><AiOutlinePlusSquare />New Leads</button></label>

                                          </div>
                                   </div>
                            </div>


                            <div className="show-media-table">


                                   <Swiper
                                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                                          spaceBetween={50}
                                          slidesPerView={1}
                                          navigation
                                   >
                                          <SwiperSlide>
                                                 <div className="card-tbd-show">
                                                        <div className="tbd-lf-show">
                                                               <img src={Img1} alt="#" />
                                                               <h1>Responsible Design and Production</h1>
                                                        </div>

                                                        <div className='tbd-lf-3-show'>

                                                               <button style={{ color: '#e8a600', border: '1px solid #e8a600' }} color='#e8a600' className='button'>Initial</button>
                                                               <span >12 weeks</span>
                                                               <span >5K+</span>
                                                               <a href='#' className='tbd-lf-5'>Activities</a>

                                                        </div>

                                                        <label className='tbd-lf-6-show'><button><AiOutlinePlusSquare />New Leads</button></label>

                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card-tbd-show">
                                                        <div className="tbd-lf-show">
                                                               <img src={Img2} alt="#" />
                                                               <h1>Responsible Design and Production</h1>
                                                        </div>

                                                        <div className='tbd-lf-3-show'>

                                                               <button style={{ color: '#e8a600', border: '1px solid #e8a600' }} color='#e8a600' className='button'>Initial</button>
                                                               <span >12 weeks</span>
                                                               <span >5K+</span>
                                                               <a href='#' className='tbd-lf-5'>Activities</a>

                                                        </div>

                                                        <label className='tbd-lf-6-show'><button><AiOutlinePlusSquare />New Leads</button></label>

                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card-tbd-show">
                                                        <div className="tbd-lf-show">
                                                               <img src={Img3} alt="#" />
                                                               <h1>Responsible Design and Production</h1>
                                                        </div>

                                                        <div className='tbd-lf-3-show'>

                                                               <button style={{ color: '#e8a600', border: '1px solid #e8a600' }} color='#e8a600' className='button'>Initial</button>
                                                               <span >12 weeks</span>
                                                               <span >5K+</span>
                                                               <a href='#' className='tbd-lf-5'>Activities</a>

                                                        </div>

                                                        <label className='tbd-lf-6-show'><button><AiOutlinePlusSquare />New Leads</button></label>

                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card-tbd-show">
                                                        <div className="tbd-lf-show">
                                                               <img src={Img1} alt="#" />
                                                               <h1>Responsible Design and Production</h1>
                                                        </div>

                                                        <div className='tbd-lf-3-show'>

                                                               <button style={{ color: '#e8a600', border: '1px solid #e8a600' }} color='#e8a600' className='button'>Initial</button>
                                                               <span >12 weeks</span>
                                                               <span >5K+</span>
                                                               <a href='#' className='tbd-lf-5'>Activities</a>

                                                        </div>

                                                        <label className='tbd-lf-6-show'><button><AiOutlinePlusSquare />New Leads</button></label>

                                                 </div>
                                          </SwiperSlide>
                                   </Swiper>

                            </div>
                     </div>

              </div>
       );
}

export default Footer;