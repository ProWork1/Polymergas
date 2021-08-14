import React from 'react'
import './Xizmat.css'
import { IoIosSearch } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from './Cal/Col';


import sahnaBezak from '../../img/icons/ahna bezak.png'
import car from '../../img/icons/car 1.png'
import fotostudiyo from '../../img/icons/fotostudiyo.png'
import gul from '../../img/icons/gul.png'
import libos from '../../img/icons/libos.png'
import montaj from '../../img/icons/montaj.png'
import multi from '../../img/icons/multi.png'
import oshpaz from '../../img/icons/oshpaz.png'
import sanatkor from '../../img/icons/sanatkor.png'
import shirinlik from '../../img/icons/shirinlik.png'
import sovga from '../../img/icons/sovga.png'
import sozanda from '../../img/icons/sozanda.png'
import toyhat from '../../img/icons/toyhat.png'
import toyhona from '../../img/icons/toyhona.png'
import uzuk from '../../img/icons/uzuk.png'


function Xizmat() {
    return (
        <div className={"xizmat"}>
            <div className={"container py-5"}>

                <div className={"searchInput"}>
                    <div className={'inputOne iconAll'}>
                        <input type="text" placeholder={"Qidiruv"} />
                        <IoIosSearch className={"iconSearch"} />
                    </div>
                    <div className={'inputTwo iconAll'}>
                        <input type="text" placeholder={"Viloyat , shahar"} />
                        <GoLocation className={"iconLocation"} />
                    </div>
                </div>
                <p>Xizmatlarimiz</p>
                <div className={'row'} >
                    <div className={"col-xl-2 col-md-4 col-6 mt-2"}>
                        <Col img={toyhona} p={'To‘yxonalar'} />
                    </div>
                    <div className={"col-xl-2 col-md-4 col-6 mt-2"}>
                        <Col img={toyhona} p={'Taklifnomalar'} />
                    </div>
                    <div className={"col-xl-2 col-md-4 col-6 mt-2"}>
                        <Col img={toyhona} p={'Gullar'} />
                    </div>
                    <div className={"col-xl-2 col-md-4 col-6 mt-2"}>
                        <Col img={toyhona} p={'Oshpazlar'} />
                    </div>
                    <div className={"col-xl-2 col-md-4 col-6 mt-2"}>
                        <Col img={toyhona} p={'Sahna bezaklari'} />
                    </div>
                    <div className={"col-xl-2 col-md-4 col-6 mt-2"}>
                        <Col img={toyhona} p={'Uzuklar'} />
                    </div>
                    <div className={"col-12 yashirin"} >
                        <div className={"row"}>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={sanatkor} p={'San`atkorlar'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={libos} p={'To‘y liboslari'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={sozanda} p={'Sozandalar'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={montaj} p={'Tasvir va montaj'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={fotostudiyo} p={'Fotostudialar'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                            <div className={"col-md-4 col-6 mt-2"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"korinish"}>
                    <div className={"grid-container "} >
                        <div className={"grid-item"}>
                            <Col img={sanatkor} p={'San`atkorlar'} />
                        </div>
                        <div className={"grid-item"}>
                            <Col img={libos} p={'To‘y liboslari'} />
                        </div>
                        <div className={"grid-item"}>
                            <Col img={sozanda} p={'Sozandalar'} />
                        </div>
                        <div className={"grid-item"}>
                            <Col img={montaj} p={'Tasvir va montaj'} />
                        </div>
                        <div className={"grid-item"}>
                            <Col img={fotostudiyo} p={'Fotostudialar'} />
                        </div>
                    </div>
                    <div className={" text-center "}>
                        <div className={"row"} >
                            <div className={"col-md-3"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                            <div className={"col-md-3"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                            <div className={"col-md-3"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                            <div className={"col-md-3"}>
                                <Col img={toyhona} p={'To‘yxonalar'} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Xizmat
