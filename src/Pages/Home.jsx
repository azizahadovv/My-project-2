import React, { useState } from 'react';
import './home.css'
// react icons
import { AiFillCheckCircle, AiFillDownSquare, AiFillQqSquare, AiOutlineCheck, AiOutlineDollar, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { FaCommentDollar, FaSquare, FaTicketAlt } from 'react-icons/fa'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// images
import Logo from './Images/logo.svg'
import Avatar from './Images/Ellipse 2725.png'
import Card1 from './Images/card1.png'
import Card2 from './Images/card2.png'
import Card3 from './Images/card3.png'
import Body from './Body/Body';


function Home(props) {
       const [menu, setMenu] = useState(false)
       return (
              <div >
                     <div className="navbar">
                            <div className="container-nav">
                                   <div className="logo">
                                          <img src={Logo} alt="#" />
                                   </div>
                                   <ul className='Navbar-ul'>
                                          <li><a href="#">Home</a></li>
                                          <li><a href="#">User dashboard</a></li>
                                          <li><a href="#">Ongoing Progress </a></li>
                                   </ul>
                                   <div className="user-page">
                                          <button className='button user-page-btn'> <img src={Avatar} alt="#" /></button>
                                   </div>
                            </div>
                            <div className="container-nav-2">
                                   <button className='button button-2-menu' onClick={() => (menu === true ? setMenu(false) : setMenu(true))}>
                                          <AiOutlineMenu />
                                   </button>
                                   <ul style={menu === true ? { display: 'block' } : { display: 'none' }} className='Navbar-ul-2'>
                                          <li><a href="#">Home</a></li>
                                          <li><a href="#">User dashboard</a></li>
                                          <li><a href="#">Ongoing Progress </a></li>
                                   </ul>
                                   <div className="logo">
                                          <img src={Logo} alt="#" />
                                   </div>


                                   <button className='button user-page-btn'> <img src={Avatar} alt="#" /></button>

                            </div>


                     </div>

                     <div className="hero container">
                            <div className="top">
                                   <h1>Top Products For Your Leads</h1>

                                   <div className='form-search'>
                                          <label className="inp-search">
                                                 <input type="text " placeholder='Product search here' />
                                                 <button className='button-search'>
                                                        < AiOutlineSearch />
                                                 </button>

                                          </label>
                                   </div>


                            </div>
                            <div className="bottom">
                                   <div className="card-ded">
                                          <div className="card">
                                                 <div className="card-heder">
                                                        <img src={Card1} alt="#" />
                                                 </div>
                                                 <div className="card-title mt-2">
                                                        <p>Fieldglass Contingent Workforce Management</p>
                                                 </div>
                                                 <div className="card-footer">
                                                        <div className="top-foot">
                                                               <p><FaTicketAlt className='mr-3' /> Commission </p>
                                                               <p>20%</p>
                                                        </div>
                                                        <div className="center-foot">
                                                               <p><AiFillDownSquare className='mr-3' /> Recomended Matchup </p>
                                                               <p style={{ fontWeight: 'bold' }}>7</p>
                                                        </div>
                                                        <div className="bottom-foot">
                                                               <p><AiOutlineDollar className='mr-3' /> Project size range:</p>
                                                               <p style={{ fontWeight: 'bold', color: '#2A85FF' }}>$60K+</p>
                                                        </div>
                                                 </div>

                                          </div>
                                          <div className="card">
                                                 <div className="card-heder">
                                                        <img src={Card2} alt="#" />
                                                 </div>
                                                 <div className="card-title mt-2">
                                                        <p>Fieldglass Contingent Workforce Management</p>
                                                 </div>
                                                 <div className="card-footer">
                                                        <div className="top-foot">
                                                               <p><FaTicketAlt className='mr-3' /> Commission </p>
                                                               <p>7%</p>
                                                        </div>
                                                        <div className="center-foot">
                                                               <p><AiFillDownSquare className='mr-3' /> Recomended Matchup </p>
                                                               <p style={{ fontWeight: 'bold' }}>5</p>
                                                        </div>
                                                        <div className="bottom-foot">
                                                               <p><AiOutlineDollar className='mr-3' /> Project size range:</p>
                                                               <p style={{ fontWeight: 'bold', color: '#2A85FF' }}>$60K+</p>
                                                        </div>
                                                 </div>

                                          </div>
                                          <div className="card">
                                                 <div className="card-heder">
                                                        <img src={Card3} alt="#" />
                                                 </div>
                                                 <div className="card-title mt-2">
                                                        <p>Fieldglass Contingent Workforce Management</p>
                                                 </div>
                                                 <div className="card-footer">
                                                        <div className="top-foot">
                                                               <p><FaTicketAlt className='mr-3' /> Commission </p>
                                                               <p>15%</p>
                                                        </div>
                                                        <div className="center-foot">
                                                               <p><AiFillDownSquare className='mr-3' /> Recomended Matchup </p>
                                                               <p style={{ fontWeight: 'bold' }}>4</p>
                                                        </div>
                                                        <div className="bottom-foot">
                                                               <p><AiOutlineDollar className='mr-3' /> Project size range:</p>
                                                               <p style={{ fontWeight: 'bold', color: '#2A85FF' }}>$60K+</p>
                                                        </div>
                                                 </div>

                                          </div>
                                   </div>

                                   <div className="media-card-ded">
                                          <Swiper
                                                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                 spaceBetween={50}
                                                 slidesPerView={1}
                                                 navigation
                                          >
                                                 <SwiperSlide>
                                                        <div className="card">
                                                               <div className="card-heder">
                                                                      <img src={Card1} alt="#" />
                                                               </div>
                                                               <div className="card-title mt-2">
                                                                      <p>Fieldglass Contingent Workforce Management</p>
                                                               </div>
                                                               <div className="card-footer">
                                                                      <div className="top-foot">
                                                                             <p><FaTicketAlt className='mr-3' /> Commission </p>
                                                                             <p>20%</p>
                                                                      </div>
                                                                      <div className="center-foot">
                                                                             <p><AiFillDownSquare className='mr-3' /> Recomended Matchup </p>
                                                                             <p style={{ fontWeight: 'bold' }}>7</p>
                                                                      </div>
                                                                      <div className="bottom-foot">
                                                                             <p><AiOutlineDollar className='mr-3' /> Project size range:</p>
                                                                             <p style={{ fontWeight: 'bold', color: '#2A85FF' }}>$60K+</p>
                                                                      </div>
                                                               </div>

                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="card">
                                                               <div className="card-heder">
                                                                      <img src={Card2} alt="#" />
                                                               </div>
                                                               <div className="card-title mt-2">
                                                                      <p>Fieldglass Contingent Workforce Management</p>
                                                               </div>
                                                               <div className="card-footer">
                                                                      <div className="top-foot">
                                                                             <p><FaTicketAlt className='mr-3' /> Commission </p>
                                                                             <p>7%</p>
                                                                      </div>
                                                                      <div className="center-foot">
                                                                             <p><AiFillDownSquare className='mr-3' /> Recomended Matchup </p>
                                                                             <p style={{ fontWeight: 'bold' }}>5</p>
                                                                      </div>
                                                                      <div className="bottom-foot">
                                                                             <p><AiOutlineDollar className='mr-3' /> Project size range:</p>
                                                                             <p style={{ fontWeight: 'bold', color: '#2A85FF' }}>$60K+</p>
                                                                      </div>
                                                               </div>

                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="card">
                                                               <div className="card-heder">
                                                                      <img src={Card3} alt="#" />
                                                               </div>
                                                               <div className="card-title mt-2">
                                                                      <p>Fieldglass Contingent Workforce Management</p>
                                                               </div>
                                                               <div className="card-footer">
                                                                      <div className="top-foot">
                                                                             <p><FaTicketAlt className='mr-3' /> Commission </p>
                                                                             <p>15%</p>
                                                                      </div>
                                                                      <div className="center-foot">
                                                                             <p><AiFillDownSquare className='mr-3' /> Recomended Matchup </p>
                                                                             <p style={{ fontWeight: 'bold' }}>4</p>
                                                                      </div>
                                                                      <div className="bottom-foot">
                                                                             <p><AiOutlineDollar className='mr-3' /> Project size range:</p>
                                                                             <p style={{ fontWeight: 'bold', color: '#2A85FF' }}>$60K+</p>
                                                                      </div>
                                                               </div>

                                                        </div>
                                                 </SwiperSlide>
                                          </Swiper>
                                   </div>
                            </div>


                     </div>
                     <Body />
              </div>
       );
}

export default Home;