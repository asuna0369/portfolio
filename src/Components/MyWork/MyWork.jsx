import React from 'react'
import './MyWork.css'
import theme from '../../assets/tiret2.png'
import mywork_data from '../../Components/mywork_data.js'
import arrow_icon from '../../assets/arrow.ico'
import { Link } from 'react-router-dom'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
       <div className="mywork-title">
        <h1>
         My latest Work   
        </h1>
        <img src={theme} alt="" width={100} />
        </div> 
        <div className="mywork-container">
          {mywork_data.map((work, index) => {
            const link = work.link || (work.anchor ? `/all-projects#${work.anchor}` : null);

            return (
              <div key={index} className="mywork-item">
                {link ? (
                  <a href={link}>
                    <img src={work.w_img} alt={work.w_name} />
                  </a>
                ) : (
                  <div className="mywork-local">
                    <img src={work.w_img} alt={work.w_name} />
                  </div>
                )}
              </div>
            );
          })}


        </div>
        <Link to="/all-projects" className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" width={30}/>
        </Link>

    </div>
  )
}

export default MyWork
