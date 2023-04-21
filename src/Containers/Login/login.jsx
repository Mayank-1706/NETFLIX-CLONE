import React from 'react'
import './login.css'

const login = () => {
  return (
    <div className='login'>
      <p className='login_heading'>Who's watching?</p>
      <div className='login_icons'>
      <a href=' '>
        <div>
          <img src='https://drive.google.com/uc?export=view&id=1ARPMGCAXVRKxGSWJzZFeRu_fp_QCs4vQ'/>
          <p>Dave</p>
        </div>
      </a>
      <a href=''>
        <div>
          <img src='https://drive.google.com/uc?export=view&id=1VcPJV5h7kNJWlSyVhV5RLUXrIpFEi_Vk'/>
          <p>Mayank</p>
        </div>
      </a>
         
      <a href=''>
        <div>
          <img src='https://drive.google.com/uc?export=view&id=1umFG5GSgOLZwv6kvNhMjjbPBFOsP0IGj'/>
          <p>Yakshit</p>
        </div>
      </a>       
        
      <a href=''>
        <div>
          <img src='https://drive.google.com/uc?export=view&id=1MO2TxFpfTYNp1KcBz5jbA15CP-SVJSGY'/>
          <p>Abhishek</p>
        </div>
      </a>
        
      <a href=''>
        <div>
          <img src='https://drive.google.com/uc?export=view&id=1XDdrEK4qVQnq91sTJBA8WeTdPiTSB3yZ'/>
          <p>Arsh</p>
        </div>
      </a>
        
      </div>
        <button className='login_button'>Mangae Profiles</button>
    </div>
  )
}

export default login
