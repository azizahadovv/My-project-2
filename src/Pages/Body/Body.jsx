import React from 'react';
import './body.css'
// icons 
import { AiOutlineDollar } from 'react-icons/ai'
import { FaTicketAlt } from 'react-icons/fa'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// picture

import Card1 from '../Images/card4.png'
import Card2 from '../Images/card5.png'
import Card3 from '../Images/card6.png'
import Hero from '../Hero-2/Hero';




function Body(props) {
       return (
              <>
                     <div className='hero container'>
                            <h1 className='title my-5'>People That Top Product are Looking For</h1>
                            <div className="card-hero">
                                   <div className="card-line">
                                          <div className="left-card">
                                                 <img src={Card1} alt="#" />
                                                 <div className="text-line">
                                                        <h1>Owner / CEO</h1>
                                                        <p>Responsible Design and Production</p>
                                                        <span>It is a long established fact that a reader will be distracted by the readable content layout.</span>
                                                 </div>

                                          </div>
                                          <div className="center-card">
                                                 <div className="box-left">
                                                        <h1>100K - 2M</h1>
                                                        <p>Project Size</p>
                                                 </div>
                                                 <div className="box-right">
                                                        <h1>7%</h1>
                                                        <p>Commission </p>
                                                 </div>
                                          </div>
                                          <button style={{ width: '150px', height: '50px' }} className='btn btn-outline-info bg-white text-indigo-50 hover:text-indigo-100'>View</button>
                                   </div>
                                   <div className="card-line">
                                          <div className="left-card">
                                                 <img src={Card2} alt="#" />
                                                 <div className="text-line">
                                                        <h1>HR Director / COO </h1>
                                                        <p>Fieldglass Contingent Workforce Management</p>
                                                        <span>It is a long established fact that a reader will be distracted by the readable content layout.</span>
                                                 </div>

                                          </div>
                                          <div className="center-card">
                                                 <div className="box-left">
                                                        <h1>100K - 2M</h1>
                                                        <p>Project Size</p>
                                                 </div>
                                                 <div className="box-right">
                                                        <h1>12%</h1>
                                                        <p>Commission </p>
                                                 </div>
                                          </div>
                                          <button style={{ width: '150px', height: '50px' }} className='btn btn-outline-info bg-white text-indigo-50 hover:text-indigo-100'>View</button>
                                   </div>
                                   <div className="card-line">
                                          <div className="left-card">
                                                 <img src={Card3} alt="#" />
                                                 <div className="text-line">
                                                        <h1>Operation Director / COO </h1>
                                                        <p>Manufacturing execution systems (mes)</p>
                                                        <span>It is a long established fact that a reader will be distracted by the readable content layout.</span>
                                                 </div>

                                          </div>
                                          <div className="center-card">
                                                 <div className="box-left">
                                                        <h1>100K - 1.5M</h1>
                                                        <p>Project Size</p>
                                                 </div>
                                                 <div className="box-right">
                                                        <h1>15%</h1>
                                                        <p>Commission </p>
                                                 </div>
                                          </div>
                                          <button style={{ width: '150px', height: '50px' }} className='btn btn-outline-info bg-white text-indigo-50 hover:text-indigo-100'>View</button>
                                   </div>
                            </div>

                            <div className="card-hero-respos">






                                   <Swiper
                                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                                          spaceBetween={50}
                                          slidesPerView={1}
                                          navigation
                                          className='mySwiper'
                                   >
                                          <SwiperSlide className='mySwiper-child'><div className="card-line-respos mb-5">
                                                 <div className="left-card">
                                                        <h1>Owner / CEO</h1>
                                                        <p>Responsible Design and Production</p>

                                                 </div>
                                                 <div className="center-card-1">
                                                        <div className="box-left-1">
                                                               <p><FaTicketAlt className='mx-2' /> Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                        <div className="box-right-1">
                                                               <p> <AiOutlineDollar className='mx-2' /> Project size range:</p>
                                                               <p>100K - 2M </p>
                                                        </div>
                                                 </div>
                                                 <button style={{ color: '#2a85ff' }} className='button button-1'>View</button>
                                          </div></SwiperSlide>
                                          <SwiperSlide className='mySwiper-child'><div className="card-line-respos mb-5">
                                                 <div className="left-card">
                                                        <h1>Owner / CEO</h1>
                                                        <p>Responsible Design and Production</p>

                                                 </div>
                                                 <div className="center-card-1">
                                                        <div className="box-left-1">
                                                               <p><FaTicketAlt className='mx-2' /> Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                        <div className="box-right-1">
                                                               <p> <AiOutlineDollar className='mx-2' /> Project size range:</p>
                                                               <p>100K - 2M </p>
                                                        </div>
                                                 </div>
                                                 <button style={{ color: '#2a85ff' }} className='button button-1'>View</button>
                                          </div></SwiperSlide>
                                          <SwiperSlide className='mySwiper-child'><div className="card-line-respos mb-5">
                                                 <div className="left-card">
                                                        <h1>Owner / CEO</h1>
                                                        <p>Responsible Design and Production</p>

                                                 </div>
                                                 <div className="center-card-1">
                                                        <div className="box-left-1">
                                                               <p><FaTicketAlt className='mx-2' /> Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                        <div className="box-right-1">
                                                               <p> <AiOutlineDollar className='mx-2' /> Project size range:</p>
                                                               <p>100K - 2M </p>
                                                        </div>
                                                 </div>
                                                 <button style={{ color: '#2a85ff' }} className='button button-1'>View</button>
                                          </div></SwiperSlide>
                                          <SwiperSlide className='mySwiper-child'><div className="card-line-respos mb-5">
                                                 <div className="left-card">
                                                        <h1>Owner / CEO</h1>
                                                        <p>Responsible Design and Production</p>

                                                 </div>
                                                 <div className="center-card-1">
                                                        <div className="box-left-1">
                                                               <p><FaTicketAlt className='mx-2' /> Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                        <div className="box-right-1">
                                                               <p> <AiOutlineDollar className='mx-2' /> Project size range:</p>
                                                               <p>100K - 2M </p>
                                                        </div>
                                                 </div>
                                                 <button style={{ color: '#2a85ff' }} className='button button-1'>View</button>
                                          </div></SwiperSlide>
                                          <SwiperSlide className='mySwiper-child'><div className="card-line-respos mb-5">
                                                 <div className="left-card">
                                                        <h1>Owner / CEO</h1>
                                                        <p>Responsible Design and Production</p>

                                                 </div>
                                                 <div className="center-card-1">
                                                        <div className="box-left-1">
                                                               <p><FaTicketAlt className='mx-2' /> Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                        <div className="box-right-1">
                                                               <p> <AiOutlineDollar className='mx-2' /> Project size range:</p>
                                                               <p>100K - 2M </p>
                                                        </div>
                                                 </div>
                                                 <button style={{ color: '#2a85ff' }} className='button button-1'>View</button>
                                          </div></SwiperSlide>

                                   </Swiper>
                            </div>

                     </div>
                     <Hero />
              </>
       );
}

export default Body;