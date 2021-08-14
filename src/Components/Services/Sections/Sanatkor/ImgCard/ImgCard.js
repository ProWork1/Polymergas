import React from 'react'
import './ImgCard.css'


function ImgCard({ img, name, kasb }) {
    return (
        <div className={"imgCard"} >
            <img className={'img'} src={img} alt="" />
            <div style={{ marginLeft: '10px' }} className={'text py-2'} >
                <b>{name}</b>
                <p>{kasb}</p>
            </div>
        </div>
    )
}

export default ImgCard
