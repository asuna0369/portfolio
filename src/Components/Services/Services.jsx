
import React from 'react'
import './Services.css'
import theme from '../../assets/tiret2.png'
import Services_Data from '../../Components/services_data.js'
import arrow_icon from '../../assets/arrow.ico'

const Services = () => {
  return (
    <div id='services' className='services'>
       <div className="services-title">
         <h1>My Services</h1>
         <img src={theme} alt="" width={100} />
       </div>
        <div className="services-container">
          {Services_Data.map((service,index)=>
          {
            return <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <a href={service.link} className="services-readmore">
                <p>Read more</p>
                <img src={arrow_icon} alt="" width={30} />
              </a>
            </div>
          }
          )}
        </div>
    </div>
  )
}

export default Services
