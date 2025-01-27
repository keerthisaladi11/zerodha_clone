import React from 'react'
import '../css/header.css'

function header() {
  return (
    <>
        <div className='header'>
            <img src = 'https://zerodha.com/static/images/logo.svg' width='140'/>
            <ul>
                <li>SignUp</li>
                <li>About</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Support</li>
                <li>
                    <img src = "/menu.png" width="25"></img>
                </li>
            </ul>
        </div>
    </>
  )
}

export default header
