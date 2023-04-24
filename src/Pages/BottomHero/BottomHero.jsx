import React from 'react'
import './BottomHero.css'

const BottomHero = ({ title1, title2, description1, description2, isButton, buttonText }) => {
    return (
        <section section className='bottomhero' >
            <div className="bottomhero-left">
                <h1 className='bottomhero-title'>
                    {title1}<br />
                    {title2}</h1>
                <p className="bottomhero-des">{description1}
                    <br />
                    <br />
                    {description2}
                </p>
            </div>
            {isButton === true ? ReturnButtonJXS(isButton, buttonText) : ReturnButtonJXS(isButton)}
        </section >
    )
}

const ReturnButtonJXS = (isButton, buttonText) => {
    if (isButton) {
        return (
            <nav >
                <ul className='navbar-list'>
                    <li><button className='btn-common btn-sign_up'>{buttonText}</button></li>
                </ul>
            </nav>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}
export default BottomHero