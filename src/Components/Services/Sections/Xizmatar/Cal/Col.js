import React from 'react'
import './Cal.css'


function Col({ img, p }) {
    return (
        <div className={"CalXizmat"} >
            <img className={'icon-img'} src={img} alt="" />
            <p className={"text"} >{p}</p>
        </div>
    )
}

export default Col
