import img1 from '@/assets/portfolio1.png'
import img2 from '@/assets/portfolio2.png'
import img3 from '@/assets/portfolio3.png'
import img4 from '@/assets/portfolio4.png'
import img5 from '@/assets/yuppie.png'
import img6 from '@/assets/yuppie2.png'
import img7 from '@/assets/yuppie3.png'
import img8 from '@/assets/yuppie4.png'
import img9 from'@/assets/biblio.jpg'
import img10 from'@/assets/biblio2.png'
import img11 from'@/assets/biblio3.png'
import img12 from'@/assets/biblio4.png'
import img13 from'@/assets/asunabijoux.png'
import img14 from'@/assets/asunabijoux1.png'
import img15 from'@/assets/asunabijoux2.png'
import img16 from'@/assets/asunabijoux3.png'
import img17 from '@/assets/pointgame.png'
import img18 from '@/assets/pointgame2.png'
import img19 from '@/assets/pointgame3.png'
import img20 from '@/assets/pointgame4.png'
import img21 from '@/assets/loyaltea.png'
import img22 from '@/assets/loyaltea2.png'
import img23 from '@/assets/loyaltea5.png'
import img24 from '@/assets/loyaltea4.png'
import img25 from '@/assets/Lightbound.png'
import img26 from '@/assets/asuna_music.png'
import img27 from '@/assets/design.png'
import img28 from '@/assets/maq.png'
import img29 from '@/assets/ARdesign6.jpg'
import img30 from '@/assets/ARdesign.jpg'
import img31 from '@/assets/ARdesign2.jpg'
import img32 from '@/assets/ARdesign8.jpg'
import img33 from '@/assets/ARdesign3.jpg'
import img34 from '@/assets/ARdesign7.jpg'
import img35 from '@/assets/ARdesign10.jpg'
import img36 from '@/assets/ARdesign11.jpg'

const allProjects = [
  {
    id: "",
    title: "Portfolio Personnel",
    description: "Site web personnel développé avec React.js et stylisé à l’aide de Tailwind CSS, conçu pour présenter de manière claire et dynamique mes compétences techniques, les services que je propose ainsi qu’une sélection de mes projets récents.\nCe portfolio reflète à la fois mon parcours de développeuse, mon sens du design et ma capacité à créer des interfaces modernes, réactives et professionnelles, tout en mettant en avant mon expertise dans des domaines tels que le développement web, la conception logicielle et l'intelligence artificielle.",
    images: [img1,img4,img2,img3],
    link: "http://localhost:5173/all-projects", 
  },
  {
    id:"",
    title: "YuppieHub",
    description: "Yuppie Hub est une plateforme web innovante dédiée à la mise en relation entre développeurs malgaches qualifiés et clients francophones. \nCette application facilite la collaboration à distance grâce à un système performant de gestion des profils, projets et communications.\nElle est construite sur une architecture robuste utilisant MongoDB pour la gestion de la base de données, assurant flexibilité et scalabilité. \nLe back-end repose sur Node.js  tandis que le front-end utilise React pour offrir une interface utilisateur fluide et réactive.\nL’ensemble est hébergé sur Vercel, garantissant des déploiements rapides, une haute disponibilité et une excellente performance.\n Vous pouvez y accéder en cliquant sur Yuppie hub ci-dessus.",
    images: [img5, img6,img7,img8],
    link: "https://hy27.vercel.app/fr/login", 
  },
  {
    id: "biblio",
    title: "Bibliotheque numerique",
    description: "L’application web « Bibliothèque Numérique » est un projet numérique gouvernemental d’envergure dirigé par le  ministère du Travail, de l’Emploi et de la Fonction Publique malagasy.\nCe projet s’inscrit dans une démarche de modernisation des services publics et vise à offrir une plateforme interactive et accessible à l’ensemble des citoyens malagasy.\nL’objectif principal de cette application est de centraliser et de diffuser efficacement la législation du travail malagasy, afin de la rendre compréhensible et accessible à tous les acteurs concernés : agents de l’État, employeurs, salariés et citoyens.\nPour cela, l’application propose une interface moderne et responsive, adaptée à tous les supports numériques, une navigation fluide et intuitive, ainsi qu’une classification claire des textes législatifs, accompagnée d’un moteur de recherche avancé.\nElle est déja finalisée et sera bientôt disponible en ligne",
    images: [img9,img10,img11,img12]
    
  },
//   {
//     title: "Espace boutique (Projet local)",
//     description: "Maquette d’un site e-commerce avec paniers, filtres, pages produits, etc. En cours de développement.",
//     images: [img9,img10,img11,img12]
//   },
// Ajoute d'autres projets ici
  {
    id: "asuna-bijoux",
    title: "AsunaBijoux (Projet local)",
    description: "AsunaBijoux est un site e-commerce local conçu pour la vente de bijoux artisanaux et fantaisie. Il permet aux utilisateurs de parcourir une collection variée de produits (colliers, bracelets, bagues, etc.) grâce à un système simple de navigation et de filtrage.\nLe site comprend des pages produits individuelles, un panier d’achat fonctionnel, ainsi qu’un système de filtrage par catégorie ou par prix pour faciliter la recherche des articles. Il offre une expérience utilisateur fluide et accessible, adaptée aux besoins d’un commerce de proximité.\nDéveloppé avec des technologies web de base telles que HTML5, CSS3, JavaScript (vanilla), et PHP côté serveur, ce projet illustre une mise en œuvre simple mais complète d’un site e-commerce.\nLes données sont stockées et gérées via des fichiers JSON ou une base de données MySQL selon les besoins, et les interactions (ajout au panier, validation de commande) sont assurées via des scripts PHP.",
    images: [img13,img14,img15,img16]
  },
  {
    id: "pointgame",
    title: "PointGame (Projet local)",
    description: "Point Game est une application web inspirée des jeux de points classiques que l’on jouait à l’école, revisitée avec une interface moderne et des options personnalisables.\nAvant de commencer une partie, chaque joueur saisit son nom et choisit une couleur pour se distinguer. Ils peuvent ensuite configurer plusieurs paramètres : la durée de la partie, le temps de réflexion par tour, ainsi que la taille du cahier virtuel (la grille de jeu).\nUne fois la partie lancée, les joueurs s’affrontent dans un environnement interactif avec un système de score intégré. À la fin du temps imparti, le joueur ayant obtenu le meilleur score est déclaré vainqueur.\nCette version numérique du jeu offre une expérience à la fois nostalgique et moderne, tout en permettant une personnalisation et un suivi en temps réel des performances.",
    images: [img17,img18,img19,img20]
  },
  {
    id: "loyaltea",
    title: "Loyaltea (Projet local)",
    description: "LoyalTea est une application (ou site web) locale conçue spécialement pour les boulangeries, cafés et restaurants malgaches souhaitant valoriser et promouvoir les boissons traditionnelles de Madagascar, telles que les thés et cafés locaux, ainsi que leurs accompagnements typiquement malagasy (mofo gasy, menakely, mofo baolina, etc.).\nL'application permet aux établissements de présenter leurs produits de manière claire et attractive, tout en intégrant des fonctionnalités simples comme :\n   -La visualisation du menu avec images et descriptions,\n  -La gestion des commandes locales (sur place ou à emporter),\n  -Et éventuellement un historique des achats pour les clients réguliers.\nLoyalTea a été pensé pour une utilisation locale, en réseau interne ou via une connexion simple, avec une interface adaptée aux besoins des petits commerçants malgaches.\nL’application est développée avec des technologies web accessibles comme HTML, CSS, JavaScript, et un back-end léger en PHP avec une base de données MySQL ou SQLite pour faciliter l’installation sur des serveurs locaux.\nL’objectif principal est de moderniser l’expérience client tout en mettant en valeur les richesses culinaires malgaches, de manière simple, efficace et accessible aux petites structures.",
    images: [img21,img22,img23,img24]
  },
  {
    id: "asuna-music",
    title: "Maquette et design",
    description: "Maquette d’un site e-commerce avec paniers, filtres, pages produits, etc. En cours de développement.",
    images: [img26,img28]
  },
    {
      id:"",
      title: "Modellisation 3D et affiche",
      description: "Cette affiche représente le jeu vidéo Lightbound, un jeu d’aventure en cours de développement dont le principe est de parcourir un labyrinthe semé d’obstacles et de trouver des clés pour progresser.\nL’affiche a été réalisée à l’aide de la technologie Canvas,offrant un rendu graphique entièrement dessiné par code.\nDe l’autre côté, on retrouve une modélisation 3D d’une maison réalisée avec Blender, un logiciel de création 3D libre et open-source. \nCe modèle met en valeur les volumes, les proportions et les textures, illustrant les bases de l’architecture résidentielle dans un environnement virtuel.",
      images: [img25,img27]
    },
    { id:"",
      title: "ARdesign",
      description: "Il s’agit d’une maquette interactive d’un site e-commerce dédié à la vente de meubles en tout genre : canapés, tables, chaises, étagères, etc.\nLa maquette propose les principales fonctionnalités d’une boutique en ligne, notamment un système de panier, des filtres de recherche (par catégorie, prix, couleur, matière…), des pages produits détaillées, ainsi qu’un système de paiement sécurisé compatible avec Mastercard, PayPal et d’autres moyens de paiement en ligne.\nLe projet est actuellement en cours de développement, avec une attention particulière portée à l’ergonomie, à l’esthétique et à l’expérience utilisateur.",
      images: [img29,img30,img31,img32,img33,img35,img36]
    },
]

export default allProjects
