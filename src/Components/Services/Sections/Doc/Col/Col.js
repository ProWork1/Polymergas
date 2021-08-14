import React from 'react'
import './Col.css'

function Col({ text }) {
    return (
        <div className={"ColDoc"} >
            <div className={'avatar'} ></div>
            <p >{text}</p>
        </div>
    )
}

export default Col
