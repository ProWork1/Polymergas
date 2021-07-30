import {React,useState} from 'react'
import './our_product_about.scss'

export default function OurProductAbout() {
    const [count,setcount] = useState(true)
    const handleClick = () => {
        setcount(!count)
    }
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className= {count ? "col-6 offset-3 py-4 rounded-3 product_about" : "d-none product_about"}>
                        <i className = "fas fa-times float-right" onClick = {handleClick}></i>
                        <img className = "w-100 mt-3" src="./images/I-0760.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
