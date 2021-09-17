import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'

function WifiIndicator() {
    return (
        <div className="indicator">
            <div className="d-flex justify-content-center align-middle"><FontAwesomeIcon icon={faWifi} className="sparking mr-2" /> No Internet Connection</div>
        </div>
    )
}

export default WifiIndicator
