import React from 'react'
import Col from './Col/Col'
import './Doc.css'

function Doc() {
    return (
        <div className={'Doc'}>
            <div className="DocChild" >
                <div className={'row'} >
                    <div className={"col-md-4 col-6"} >
                        <Col text={'Lorem ipsum dolor sit amet,consectetur adipiscing elit.  Imperdiet volutpat elit.'} />
                    </div>
                    <div className={"col-md-4 col-6"} >
                        <Col text={'Lorem ipsum dolor sit amet,consectetur adipiscing elit.  Imperdiet volutpat elit.'} />
                    </div>
                    <div className={"col-md-4 col-6"} >
                        <Col text={'Lorem ipsum dolor sit amet,consectetur adipiscing elit.  Imperdiet volutpat elit.'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doc
