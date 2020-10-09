import React from 'react'


const Spinner = ({text}) => {
    return (
        <div className="preloader">
                <div className="loader">
                    <div className="loader__figure"></div>
                    <p className="loader__label">{text}</p>
                </div>
        </div>
    )
}

export default Spinner;