import React from 'react'
import ImgCard from './ImgCard/ImgCard'
import './Sanatkor.css'
import Col from '../Xizmatar/Cal/Col'

import dkabulob from '../../img/i 1.png'
import munis from '../../img/munis.png'
import msardor from '../../img/msardor.png'
import viamar from '../../img/via mar.png'
import sanatkor from '../../img/icons/sanatkor.png'
import sozanda from '../../img/icons/sozanda.png'

function Sanatkor() {
    return (
        <div className={"Sanatkor"} >
            <div className={'title'} >
                <h2>San`atkorlar</h2>
            </div>
            <div className={"container px-5"}>
                <div className={'row'} >
                    <div className={"col-lg-3 mt-4 col-6"} >
                        <ImgCard img={dkabulob} name={"Davron Kabulov"} kasb={'Boshlovchi'} />
                    </div>
                    <div className={"col-lg-3 mt-4 col-6"} >
                        <ImgCard img={munis} name={"Munisa Rizayeva"} kasb={'San`atkor'} />
                    </div>
                    <div className={"col-lg-3 mt-4 col-6"} >
                        <ImgCard img={msardor} name={"Sardor Mamadaliyev"} kasb={'San`atkor'} />
                    </div>
                    <div className={"col-lg-3 mt-4 col-6"} >
                        <ImgCard img={viamar} name={"Via Marokand"} kasb={'San`atkor'} />
                    </div>
                    <div className={"col-6 col-lg-3 mt-4 "} >
                        <Col img={sanatkor} p={"San`atkorlar"} />
                    </div>
                    <div className={"col-6 col-lg-3 mt-4  "} >
                        <Col img={sozanda} p={"Sozandalar"} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sanatkor
