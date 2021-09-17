import React from 'react'
import loading_icon from '../../assets/logo.png'

function Loading() {
    return (
        <div className="indicator">
            {/* <div className="loading"></div> */}
            <img src={loading_icon} className="spin" width={50} alt="" />
        </div>
    )
}

export default Loading
