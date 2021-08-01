import React from 'react'
import { Container } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'
import './mainCarousel.scss'
SwiperCore.use([Autoplay, Pagination, Navigation])

const MainCarousel = () => {
    const maincarousels = [
        {
            id: 1,
            img: '/images/main-carousel/1.jpg',
            text: 'UZBEKNEFTGAZ',
        },
        {
            id: 2,
            img: '/images/main-carousel/2.jpg',
            text: 'SOCAR',
        },
        {
            id: 3,
            img: '/images/main-carousel/3.jpg',
            text: 'Uz-Kor Gas Chemical',
        },
        {
            id: 4,
            img: '/images/main-carousel/4.jpg',
            text: 'Сибур',
        },
        {
            id: 5,
            img: '/images/main-carousel/5.jpg',
            text: 'JAM Petrochemical Company',
        },
        {
            id: 6,
            img: '/images/main-carousel/6.jpg',
            text: 'КАЗАНЬОРГСИНТЕЗ',
        },
        {
            id: 7,
            img: '/images/main-carousel/7.jpg',
            text: 'Mehr Petrochemical Company',
        },
        {
            id: 8,
            img: '/images/main-carousel/8.jpg',
            text: 'Amir Kabir Petrochemical',
        },
        {
            id: 9,
            img: '/images/main-carousel/9.jpg',
            text: 'Shazand Petrochemical Company',
        },
        {
            id: 10,
            img: '/images/main-carousel/10.jpg',
            text: 'LALEH Petrochemical Company',
        },
        {
            id: 11,
            img: '/images/main-carousel/11.jpg',
            text: 'ULY YELKEN',
        },
        {
            id: 12,
            img: '/images/main-carousel/12.svg',
            text: 'INTEGRAL COMMODITIES SA',
        },
    ]

    return (
        <div id='main_carousel'>
            <Container>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        922: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                    slidesPerView={6}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className='mySwiper'
                >
                    {maincarousels.map(slide => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <div className='carousel_block'>
                                    <img src={slide.img} alt={slide.text} />
                                    <div className='popovers_block'>
                                        <div className='popovers'>
                                            <div className='popovers_text'>{slide.text}</div>
                                        </div>
                                        <div className='top_block'>
                                            <div className='top'></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </div>
    )
}

export default MainCarousel
