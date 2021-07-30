import React from 'react'
import Title from './Title'
import Button from './Button'
import OurProductsComponent from './OurProductsComponent'
import {Container} from 'reactstrap'
import './ourproduct.scss'

const Ourproduct = () => {
    const ourproducts = [
        {
            id: 1,
            img: './images/ourproduct/2.png',
            title: 'Polipropilen J-150',
            text: " Umumiy xo'jalik maqsadlar uchun"
        },
        {
            id: 2,
            img: './images/ourproduct/2.png',
            title: 'Polipropilen J-350',
            text: 'Batareya qutilari, uy jihozlari uchun korpuslar'
        },
        {
            id: 3,
            img: './images/ourproduct/2.png',
            title: 'Polipropilen FR-170H',
            text: " Umumiy xo'jalik maqsadlar uchun"
        },
        {
            id: 4,
            img: './images/ourproduct/3.png',
            title: '15813-020',
            text: "Oziq-ovqat mahsulotlari uchun mo'ljallangan"
        }
    ]
    return (
        <div>
            <Container className="py-3 py-md-5">
                <Title />
                <OurProductsComponent ourproducts={ourproducts} />
                <Button />
            </Container>
        </div>
    )
}

export default Ourproduct
