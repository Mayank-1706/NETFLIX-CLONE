import React from 'react'
import { Horizontal } from '..'
import './landing.css'

const landing = () => {
  return (
    <div className='landing'>
      <div className='landing_heading'>
        <p>D A R K</p> 
      </div>
      <div className='landing_trending'>
        <img src='https://drive.google.com/uc?export=view&id=1BsOX9LQ5GVfh1h75jCttyQukNLaIefpn'/>
        <p>#3 Trending</p> 
      </div>
      <div className='landing_about'>
        <p>When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.</p>
      </div>
      <div className='landing_buttons'>
        <button className='play'><img src='https://drive.google.com/uc?export=view&id=1IfPDHr3UAn-QnpdETMf4qOXOarGxFwpa'/> <p className='button_name'>Play</p></button>
        <button className='more_info'><img  src='https://drive.google.com/uc?export=view&id=14bOAl0ixKXzFDcA3ewP4c5ajgFagVaWY'/> <p className='button_name'>More Info</p></button>
      </div>
      <Horizontal/>
    </div>
  )
}

export default landing
