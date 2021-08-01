import React from 'react'
import Maincard from './Maincard'
import './ourproduct.scss'
import {Card, CardBody, Col, Row} from 'reactstrap'

const OurProductsComponent = (props) => {
    const ourproducts = props.ourproducts.map(ourproduct => (
            <Col sm={6} className="mb-3">
                 <Card className="card-product card-product-sm" key={ourproduct.id}>
                    <CardBody>
                        <div>
                            <img src={ourproduct.img} className="img-fluid" />
                        </div>
                        <div>
                        <h4 className="m-0 py-3 font-weight-bold text-capitalize">{ourproduct.title}</h4>
                        </div>
                        <div>
                            <p className="text-muted m-0">{ourproduct.text}</p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        
    ))

    return (
        <Row className="pt-5 card-component">
            <Col sm={6} md={6} className="mb-3">
                <Maincard /> 
            </Col>

            <Col sm={6} md={6}>
                <Row>
                         {ourproducts}
                </Row>
            </Col>
               
        </Row>
            
        
    )
}

export default  OurProductsComponent