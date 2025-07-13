import React from 'react';
import './ServicesDetail.css';
import { Link } from 'react-router-dom';

const ServicesDetail = () => {
  return (
    <div className="services-detail-page">
      <div className="return-top">
        <Link to="/" className="return-button">← Retour à l’accueil</Link>
      </div>
      <h1>Mes Services en Détail</h1>

      <div id="site-web" className="service-block">
        <h2>01 - Création de site web</h2>
        <p>
          Je conçois et développe des sites web modernes, rapides et responsives, adaptés à tous les types d’écrans (mobile, tablette, desktop).
          Que ce soit pour une page vitrine, un blog ou un site institutionnel, je m’assure de créer une interface intuitive, esthétique et bien structurée.
          L’objectif est de mettre en valeur votre activité tout en assurant une expérience fluide pour vos visiteurs.
        </p>
        <p>
          Technologies utilisées : HTML5, CSS3, JavaScript, React, hébergement sur Netlify/Vercel ou serveurs classiques.
        </p>
      </div>

      <div id="ecommerce" className="service-block">
        <h2>02 - Développement e-commerce</h2>
        <p>
          Je développe des boutiques en ligne complètes avec une gestion efficace des produits, un panier interactif, un système de paiement sécurisé (Stripe, PayPal, Mvola, etc.)
          et une interface d'administration personnalisée. L’objectif est d’offrir à vos clients une expérience d’achat simple et sécurisée, tout en vous fournissant un outil de gestion efficace.
        </p>
        <p>
          Intégration possible avec WooCommerce, Shopify, ou solutions sur mesure avec React + Node.js ou PHP.
        </p>
        
      </div>

      <div id="uiux" className="service-block">
        <h2>03 - Design UI/UX</h2>
        <p>
          Je conçois des maquettes graphiques claires, modernes et orientées utilisateur. Le design UI (User Interface) s’occupe de l’apparence et de la cohérence visuelle de votre application,
          tandis que le design UX (User Experience) vise à optimiser l’ergonomie, la navigation et la satisfaction de l’utilisateur.
        </p>
        <p>
          Outils utilisés : Figma, Adobe XD, Canva. Je peux travailler à partir d’une idée, d’un croquis ou créer une charte graphique complète.
        </p>
      </div>

      <div id="frontend" className="service-block">
        <h2>04 - Développement front-end</h2>
        <p>
          Je développe l’interface visible par l’utilisateur (le front-end) à l’aide de technologies modernes comme React.js, Vue.js ou tout simplement HTML/CSS/JavaScript pur.
          Mon objectif est de créer des interfaces réactives, rapides et esthétiques. Je m’assure que l’expérience utilisateur soit fluide et accessible sur tous les navigateurs.
        </p>
        <p>
          Je peux également intégrer des animations, des transitions, et optimiser le SEO et les performances.
        </p>
      </div>

      <div id="backend" className="service-block">
        <h2>05 - Développement back-end</h2>
        <p>
          Je prends en charge la partie « serveur » de vos projets : création d’API sécurisées, gestion de la base de données, authentification des utilisateurs, gestion des rôles,
          envoi d’emails automatiques, traitement des formulaires, etc.
        </p>
        <p>
          Stack habituelle : Node.js (Express), PHP (Laravel ou natif), MongoDB, MySQL, Firebase. Je veille toujours à la sécurité, la scalabilité et la clarté du code.
        </p>
      </div>

      <div id="tests" className="service-block">
        <h2>06 - Tests & débogage</h2>
        <p>
          Je propose un service complet de test et de maintenance. Cela inclut les tests manuels, les tests unitaires (ex. Jest), les tests fonctionnels, ainsi que la correction de bugs,
          que ce soit côté front-end ou back-end.
        </p>
        <p>
          Je fais également de l’optimisation des performances, de la mise à jour de dépendances, de la vérification de la compatibilité multi-navigateurs et de la résolution de problèmes critiques.
        </p>
      </div>
      <div className="return-bottom">
        <Link to="/" className="return-button">← Retour à l’accueil</Link>
      </div>
    </div>
  
  );
};

export default ServicesDetail;
