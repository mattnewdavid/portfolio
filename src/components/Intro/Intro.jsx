import React from 'react'
import "./intro.scss"

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="ImgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hallo, I'm</h2>
                    <h1>Matthew David</h1>
                    <h3>Freelance <span></span></h3>
                </div>
            </div>
        </div>
    )
}
