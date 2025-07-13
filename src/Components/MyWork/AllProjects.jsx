import React from 'react'
import './AllProjects.css'
import allProjects from '../../Components/all_projects_data'
import { Link } from 'react-router-dom'
import img25 from '@/assets/Lightbound.png'
import img29 from '@/assets/ARdesign6.jpg'
import img30 from '@/assets/ARdesign.jpg'
import img31 from '@/assets/ARdesign2.jpg'
import img32 from '@/assets/ARdesign8.jpg'
import img33 from '@/assets/ARdesign3.jpg'
import img34 from '@/assets/ARdesign7.jpg'
import img35 from '@/assets/ARdesign10.jpg'
import img36 from '@/assets/ARdesign11.jpg'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const portraitImages = [img25, img29, img30,img31,img32,img33,img34,img35,img36];
const AllProjects = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const target = document.getElementById(location.hash.substring(1));
    if (target) {
      // petit délai pour laisser le DOM finir de charger
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, [location]);

  return (
    <div className='all-projects'>
              {/* BOUTON RETOUR ACCUEIL */}
      <div className="back-home-container">
        <Link to="/" className="back-home-btn">← Retour à l’accueil</Link>
      </div>
      <h1>Mes Projets Complets</h1>
      {allProjects.map((project, index) => (
        <div key={index} id={project.id} className="project-card">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title-link"
            >
              <h2>{project.title}</h2>
            </a>
          ) : (
            <h2>{project.title}</h2>
          )}

          <p>{project.description}</p>  
          <div className="project-images">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} alt={`screenshot-${idx}`} className={`project-image ${portraitImages.includes(img) ? 'project-image-mobile' : ''}`}/>
            ))}
          </div>
        </div>
      ))}


    </div>
  )
}

export default AllProjects
