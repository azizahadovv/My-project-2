import React from 'react';
import './hero.css'
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
import Card1 from '../Images/card1.png'
import Card2 from '../Images/card2.png'
import Card3 from '../Images/card3.png'
import Footer from '../Footer/Footer';

function Hero(props) {
       return (
              <div>
                     <div>
                            <div style={{ margin: '50px 0' }} className="top">
                                   <h1>Your Leads May Also Look for these products</h1>
                            </div>
                            <div className="container">
                                   <Swiper
                                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                                          spaceBetween={50}
                                          slidesPerView={3}
                                          navigation
                                          className='My-cont-sw-1'
                                   >
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>

                                   </Swiper>
                                   <Swiper
                                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                                          spaceBetween={50}
                                          slidesPerView={1}
                                          navigation
                                          className='My-cont-sw-2'
                                   >
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                 <div className="card">
                                                        <div className="card-heder">
                                                               <h1>Bertrand Frohly</h1>
                                                               <p>CEO of Laboratoires Filorga</p>
                                                        </div>
                                                        <div className="tegirma">
                                                               <img width={350} src={Card1} alt="#" />
                                                        </div>
                                                        <h2>Fieldglass Contingent Workforce Management</h2>
                                                        <div className="sect-1">
                                                               <p><FaTicketAlt className='mx-2' />Commission </p>
                                                               <p>12%</p>
                                                        </div>
                                                 </div>
                                          </SwiperSlide>

                                   </Swiper>
                            </div>
                            <Footer />
                     </div>
              </div>
       );
}

export default Hero;