import React from 'react'
import { Container, Row } from 'reactstrap'
import './our_product_about.scss'

export default function OurProductAbout(props) {
    return (
        <>
            <Container>
                <Row>
                    <div>
                        <button onClick={props.closebtn} className='closebtn border-0'>
                            &times;
                        </button>
                        <img className='w-100 mt-3 closebtnimage' src='./images/I-0760.jpg' alt='' />
                    </div>
                </Row>
            </Container>
        </>
    )
}
