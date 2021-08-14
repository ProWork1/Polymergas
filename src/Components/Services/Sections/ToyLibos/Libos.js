import React from 'react'
import './Libos.css'
import fota from '../../img/fota.png'
import libos from '../../img/icons/libos.png'

function Libos() {
    return (
        <div className={"ScreenCol"}>
            <div className={"ScreenColChild"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <img className={'foto'} src={fota} alt="" />
                    </div>
                    <div className={"col-md-6"} >
                        <div className={'title'} >
                            <img src={libos} alt="" />
                            <h2>To‘y liboslari</h2>
                        </div>
                        <p className={"text-dark"} >Ajoyib ko‘rinishdagi to‘y va marosimlar o‘tkazish koshanasi.</p>
                        <p className={"text-dark"} >Sizning orzuyingizdai to‘y uchun bizning koshonamiz <br /> xizmatingizga tayyor.</p>
                        <div className={'text-center'} >
                            <div className={"button"} >
                                <img style={{ marginLeft: '15px' }} className={"mt-2"} width="25px" height="25px" src={libos} alt="" />
                                <p style={{ marginLeft: '10px' }} className={"mt-2"} >To‘y liboslari</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Libos