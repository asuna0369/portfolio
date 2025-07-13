import React from 'react'
import './Hero.css'
import profile from '../../assets/asuna.jpg'
// import cv from '../../assets/CV_RAKOTOARIMALALA_Ianissa.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt='' />
        <h1><span>Je suis RAKOTOARIMALALA Fanomezantsoa Ianissa,</span>développeur web et designer.</h1>
        <p>Je suis informaticienne & développeur et designer depuis maintenant 4 ans et j'ai realise également de multiples projets créatifs, professionnels ,personnels comme académique dans diffèrents domaines.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
            <a href="/cv.pdf" download className="hero-resume">My resume</a>


        </div>
    </div>
  )
}

export default Hero
