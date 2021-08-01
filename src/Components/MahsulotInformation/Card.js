import React from 'react';
import { Col } from 'reactstrap';
import './Card.scss';
// import CountUp from 'react-countup';

function Card({ svg, h, p, bg, k }) {
    return (
        <Col className={'card-mahsulot p-3'} xs={6}>
            <div className={'bg-div p-3'} style={{ background: bg }}>
                <div className={'svg-text'}>
                    <div className={'svg'}>
                        <img style={{ opacity: '0.4' }} src={svg} alt='' />
                    </div>
                    <h3 style={{ color: bg === 'transparent' ? ' #00477a' : 'white' }}>
                        {/* <CountUp className={'countNumber'} style={{ color: bg === 'transparent' ? ' #00477a' : 'white' }} end={h} duration={5}/>{' '} */}
                        {k ? k : ''}
                    </h3>
                </div>
                <p style={{ color: bg === 'transparent' ? ' #00477a' : 'white' }}>{p}</p>
            </div>
        </Col>
    )
}

export default Card
