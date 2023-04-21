import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer'>
      <div className='logo_footer'>
        <img src='https://drive.google.com/uc?export=view&id=1qjAqU4T-eji5tq7t9iR5qfhIQu2phO09'></img>
        <img src='https://drive.google.com/uc?export=view&id=1abUT7G6laswVvcLF_olXJyMHOVBUdw-z'></img>
        <img src='https://drive.google.com/uc?export=view&id=1QLpwmTPg6clKEv81DEWr225gvDtk9Y8y'></img>
        <img src='https://drive.google.com/uc?export=view&id=1BdzIAnEwrfmfOgjNzJ0zWLoca3PG_4j4'></img>
      </div>
      <div className='info'>
        <div className='info_col'>
          <p>Audio Description</p>
          <p>Investor Relation</p>
          <p>Legal Notices</p>
        </div>
        <div className='info_col'>
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p> 
        </div>
        <div className='info_col'>
          <p>Gift Cards </p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
        <div className='info_col'>
          <p>Media Centre</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>        
      </div>
      <button className='button'>Service Code</button>
      <p className='copyright'>© 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default footer
