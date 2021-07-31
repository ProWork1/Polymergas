import React from 'react'
import { Container, Row } from 'reactstrap'
import './Services.scss'
import svg1 from './SVG/svg1.svg'
import svg2 from './SVG/svg2.svg'
import svg3 from './SVG/svg3.svg'
import svg4 from './SVG/svg4.svg'
import svg5 from './SVG/svg5.svg'
import svg6 from './SVG/svg6.svg'
import Card from './Card'

function Services() {
    return (
        <div id={'Services'} className={'Services'}>
            <Container>
                <div className={'title'}>
                    <h1>Bizning mahsulotlar sizni biznesingizni rivojlantirish uchun </h1>
                    <p>Biz bilan hamkorlik qiling va sifatli hom-ashyoga ega bo'ling</p>
                </div>
                <Row className={'row pt-5'}>
                    <Card
                        svg={svg1}
                        h={'Tez Start Oling'}
                        p={"Ishlab chiqarish uchun eng ma'qul narx va sifat"}
                    />
                    <Card
                        svg={svg2}
                        h={'Keng Assortiment'}
                        p={'Turli mahsulotlar uchun polimerlarning keng turlari'}
                    />
                    <Card
                        svg={svg3}
                        h={"Ko'pchilik Tanlovi"}
                        p={"Haridorlarimizga ma'qul sifat va tanlov"}
                    />
                    <Card
                        svg={svg4}
                        h={"Qulay To'lov"}
                        p={"Siz o'zingizga qulay bo'lgan to'lov turini tanlashingiz mumkin"}
                    />
                    <Card
                        svg={svg5}
                        h={'Oson Xarid'}
                        p={'Mahsulotlarni telegram bot orqali xarid qiling'}
                    />
                    <Card
                        svg={svg6}
                        h={'Tizimli Boshqaruv'}
                        p={"Buyurtmalarni tizimli boshqarish va kamchiliklarga yo'l qo'ymaslik"}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Services
