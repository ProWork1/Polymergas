import React from 'react'
import { Card, CardBody, CardImg, Col, Container, Row, Modal } from 'reactstrap'
import './products.scss'
import Img1 from './1.png'
import Img2 from './2.png'
import OurProductAbout from '../Ourproduct/OurProductAbout'

const Products = () => {
    const [modal, setModal] = React.useState(false)

    const toggle = () => setModal(!modal)
    const products = [
        {
            id: 1,
            img: Img1,
            text: 'I-0670',
        },
        {
            id: 2,
            img: Img1,
            text: 'I-0670',
        },
        {
            id: 3,
            img: Img1,
            text: 'I-0670',
        },
        {
            id: 4,
            img: Img2,
            text: 'I-0670',
        },
        {
            id: 5,
            img: Img2,
            text: 'I-0670',
        },
        {
            id: 6,
            img: Img2,
            text: 'I-0670',
        },
        {
            id: 7,
            img: Img1,
            text: 'I-0670',
        },
        {
            id: 8,
            img: Img1,
            text: 'I-0670',
        },
    ]
    return (
        <div id='products'>
            <Container>
                <Row className='row1'>
                    <Col md='12'>
                        <p>Mahsulotlar</p>
                    </Col>
                </Row>
                <Row className='row2'>
                    {products.map(product => (
                        <Col md='3' key={product.id} className='px-3 mt-5'>
                            <Card onClick={toggle}>
                                <CardImg top width='100%' src={product.img} />
                                <CardBody>
                                    <h4 className='m-0 py-3'>{product.text}</h4>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                <OurProductAbout closebtn={toggle} />
            </Modal>
        </div>
    )
}

export default Products
