import React from 'react'
import { Col } from 'reactstrap'

function Card({ svg, h, p }) {
    return (
        <Col md={4}>
            <div className={'card-body h-100'}>
                <div className={'svg'}>
                    <img src={svg} alt='' />
                </div>
                <h4>{h}</h4>
                <p>{p}</p>
            </div>
        </Col>
    )
}

export default Card
