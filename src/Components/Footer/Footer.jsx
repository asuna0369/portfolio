import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/logoN.png'
import footer_logo from '../../assets/asuna_logo2.png'
import user from '../../assets/user.ico'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" width={200} />
                <p> Je suis développeur et designer.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt=""  width={35}/>
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>@ 2025 Ianissa Rakotoarimalala.All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
    </div>
  )
}

export default Footer
