import React from 'react'
import './About.css'
import theme from'../../assets/tiret2.png'
import profile from'../../assets/asuna.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme} width={100}/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} width={300} />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Développeuse passionnée par la programmation et les technologies innovantes depuis maintenant 4 ans, je conçois et développe des projets web et logiciels alliant créativité, rigueur technique et sens du design. Mon parcours m’a permis de mener à bien des projets académiques, professionnels et personnels dans des domaines variés, ce qui m’a donné une solide expérience en développement web, en design d’interface et en conception logicielle.

                    </p>
                    <p>Ma passion pour le developement web et le design.Curieuse, polyvalente et orientée solution, je cherche constamment à améliorer mes compétences et à relever de nouveaux défis.</p>
                </div>
                <div className="about-skills">
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>PHP</p><hr style={{width:"60%"}}/></div>
                    <div className='about-skill'><p>ReactJS</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>MySQL</p><hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>C#</p><hr style={{width:"30%"}}/></div>
                    <div className='about-skill'><p>Canvas</p><hr style={{width:"96%"}}/></div>
                    <div className='about-skill'><p>Figma</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETES</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr/>

        </div>
    </div>
    
  )
}

export default About
