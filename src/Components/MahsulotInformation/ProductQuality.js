import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Video from './Video/video(HD).mp4'
import svg1 from './SVG/svg1.svg'
import svg2 from './SVG/svg2.svg'
import svg3 from './SVG/svg3.svg'
import svg4 from './SVG/svg4.svg'
import Card from './Card'
import './style.scss'

function ProductQuality() {
    return (
        <div id={'section_two'} className={'mahsulotInfo d-flex px-5'}>
            <Row>
                <Col md='6'>
                    <div className={'video-block d-md-block d-none'}>
                        <video className={'rounded'} width={'100%'} autoPlay loop muted>
                            <source src={Video} type='video/mp4' className='video' />
                        </video>
                    </div>
                </Col>
                <Col md='6'>
                    <Container className={'cont ml-5 pl-5'}>
                        <div className={'title'}>
                            <h1>
                                Mahsulotlar,
                                <br /> mijozlar va sifat
                            </h1>
                            <p>Mahsulotlarning oliy sifati va yetkazib berish qulayliklari</p>
                        </div>
                        <Row>
                            <Card
                                bg={'linear-gradient(110deg, #441458 0%, #a7458d 80%'}
                                h={'10'}
                                p={'Sotilgan mahsulotlar'}
                                svg={svg1}
                                k={'K'}
                            />
                            <Card bg={'transparent'} h={'891'} p={'Haridorlar'} svg={svg2} />
                            <Card bg={'transparent'} h={'20'} p={'Hamkorlar'} svg={svg3} />
                            <Card
                                bg={'linear-gradient(110deg, #00477a 0%, #00AA8D 80%)'}
                                h={'70'}
                                p={'Mahsulot assartimenti'}
                                svg={svg4}
                            />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ProductQuality
