import React from 'react'
import { Container } from 'reactstrap'
import './mainCarousel.scss'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const MainCarousel = () => {
    return (
        <div id="main_carousel">
            <div className="container">
                <Swiper slidesPerView={6} freeMode={true} loop={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/1.jpg" alt="UZBEKNEFTGAZ" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        UZBEKNEFTGAZ
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/2.jpg" alt="SOCAR" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        SOCAR
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/3.jpg" alt="Uz-Kor Gas Chemical" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        Uz-Kor Gas Chemical
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/4.jpg" alt="Сибур" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        Сибур
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/5.jpg" alt="JAMPetrochemicalCompany" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        JAM Petrochemical Company
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/6.jpg" alt="КАЗАНЬОРГСИНТЕЗ" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        КАЗАНЬОРГСИНТЕЗ
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/7.jpg" alt="MehrPetrochemicalCompany" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        Mehr Petrochemical Company
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/8.jpg" alt="AmirKabirPetrochemical" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        Amir Kabir Petrochemical
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/9.jpg" alt="ShazandPetrochemicalCompany" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        Shazand Petrochemical Company
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/10.jpg" alt="LALEHPetrochemicalCompany" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        LALEH Petrochemical Company
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/11.jpg" alt="ULYYELKEN" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        ULY YELKEN
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel_block">
                            <img src="../images/main-carousel/12.svg" alt="INTEGRALCOMMODITIESSA" />
                            <div className="popovers_block">
                                <div className="popovers">
                                    <div className="popovers_text">
                                        INTEGRAL COMMODITIES SA
                                    </div>
                                </div>
                                <div className="top_block">
                                    <div className="top"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default MainCarousel
