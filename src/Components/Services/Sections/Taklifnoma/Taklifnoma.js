import React from 'react'
import taklifnoma from '../../img/taklifnoma.png'
import toyhona from '../../img/icons/toyhona.png'

import ImgCard from '../Sanatkor/ImgCard/ImgCard'

import Col from '../Xizmatar/Cal/Col';
import './Taklifnoma.css'

function Taklifnoma() {
    return (
        <div className={"Taklifnoma"}>
            <div className={'title'} >
                <h2>San`atkorlar</h2>
            </div>
            <div className={"container px-5"}>
                <div className={'row'} >
                    <div className={"col-xl-3 col-md-4 col-6 mt-3"} >
                        <ImgCard img={taklifnoma} name={"Davron Kabulov"} kasb={'Boshlovchi'} />
                    </div>
                    <div className={"col-xl-3 col-md-4 col-6 mt-3"} >
                        <ImgCard img={taklifnoma} name={"Munisa Rizayeva"} kasb={'San`atkor'} />
                    </div>
                    <div className={"col-xl-3 col-md-4 col-6 mt-3"} >
                        <ImgCard img={taklifnoma} name={"Sardor Mamadaliyev"} kasb={'San`atkor'} />
                    </div>
                    <div className={"col-xl-3 col-md-4 col-6 mt-3"} >
                        <ImgCard img={taklifnoma} name={"Via Marokand"} kasb={'San`atkor'} />
                    </div>
                    <br />

                </div>
                <div className={'row my-4'}>
                    <div className={"col-xl-3 col-md-4 "} >
                        <Col img={toyhona} p={"San`atkorlar"} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Taklifnoma
