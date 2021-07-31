import React from 'react'
import { Card, CardBody, Col, Container, Row, Modal } from 'reactstrap'
import './ourproduct.scss'
import OurProductAbout from './OurProductAbout'

const Ourproduct = () => {
    const [modal, setModal] = React.useState(false)

    const toggle = () => setModal(!modal)

    const ourproducts = [
        {
            id: 1,
            img: './images/ourproduct/2.png',
            h4: 'Polipropilen J-150',
            p: "Umumiy xo'jalik maqsadlar uchun",
        },
        {
            id: 2,
            img: './images/ourproduct/2.png',
            h4: 'Polipropilen J-350',
            p: 'Batareya qutilari, uy jihozlari uchun korpuslar',
        },
        {
            id: 3,
            img: './images/ourproduct/2.png',
            h4: 'Polipropilen FR-170H',
            p: "Umumiy xo'jalik maqsadlar uchun",
        },
        {
            id: 4,
            img: './images/ourproduct/2.png',
            h4: '15813-020',
            p: "Oziq-ovqat mahsulotlari uchun mo'ljallangan",
        },
    ]
    return (
        <div id={'Ourproduct'}>
            <Container className='py-3 py-md-5'>
                <div className='title'>
                    <h1>Bizning mahsulotlar</h1>
                    <p>Bizdagi mavjud mahsulotlarni o'zingizga ma'qul narxlarda harid qiling</p>
                </div>
                <div className='row pt-5'>
                    <Col md='6' className='col-12 mb-md-0 p-3'>
                        <Card className='card-product' onClick={toggle}>
                            <CardBody>
                                <img src='./images/ourproduct/1.png' className='img-fluid' alt='' />
                                <h4 className='mt-5 py-3 font-weight-bold text-capitalize'>
                                    Polietilen I-0760
                                </h4>
                                <p className='text-muted m-0'>Umumiy maqsadlar uchun </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='6' className='col-12'>
                        <Row className='h-100'>
                            {ourproducts.map(ourproduct => (
                                <Col md='6' key={ourproduct.id} className='p-3'>
                                    <Card
                                        className='card-product card-product-sm h-100'
                                        onClick={toggle}
                                    >
                                        <CardBody>
                                            <img
                                                src={ourproduct.img}
                                                className='img-fluid'
                                                alt=''
                                            />
                                            <h4 className='m-0 py-3 font-weight-bold text-capitalize'>
                                                {ourproduct.h4}
                                            </h4>
                                            <p className='text-muted m-0'>{ourproduct.p}</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </div>
                <Row className='row'>
                    <div className='col-md-12 text-right py-5'>
                        <a href='/' className='btn btn-primary'>
                            Yana ko'rsatish
                        </a>
                    </div>
                </Row>
            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                <OurProductAbout closebtn={toggle} />
            </Modal>
        </div>
    )
}

export default Ourproduct
