import React from 'react'
import './Saroy.css'
import saroy from '../../img/s1200 1.png'
import toyhona from '../../img/icons/toyhona.png'

function Saroy() {
    return (
        <div className={"ScreenCol"}>
            <div className={"ScreenColChild"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <img className={'saroy'} src={saroy} alt="" />
                    </div>
                    <div className={"col-md-6"} >
                        <div className={'title'} >
                            <img src={toyhona} alt="" />
                            <h2>Tantanalar saroyi</h2>
                        </div>
                        <p className={"text-dark"} >Ajoyib ko‘rinishdagi to‘y va marosimlar o‘tkazish koshanasi.</p>
                        <p className={"text-dark"} >Sizning orzuyingizdai to‘y uchun bizning koshonamiz <br /> xizmatingizga tayyor.</p>
                        <div className={'text-center'} >
                            <div className={"button"} >
                                <img style={{ marginLeft: '15px' }} className={"mt-2    "} width="25px" height="25px" src={toyhona} alt="" />
                                <p style={{ marginLeft: '10px' }} className={"mt-2"} >To'yhona</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saroy
