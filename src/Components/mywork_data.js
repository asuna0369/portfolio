import project1 from '@/assets/yuppie.PNG'
import project2 from '@/assets/biblio.jpg'
import project3 from '@/assets/loyaltea.png'
import project4 from '@/assets/asunabijoux.png'
import project5 from '@/assets/pointgame.png'
import project6 from '@/assets/asuna_music.png'

const mywork_data = [
  {
    w_no: 1,
    w_name: "Web Design",
    w_img: project1,
    link: "https://hy27.vercel.app/fr/login" ,// accessible en ligne
    anchor: null
  },
  {
    w_no: 2,
    w_name: "Portfolio personnel (local)",
    w_img: project2,
    link: null, // projet local,
    w_desc: "Ceci est mon portfolio personnel développé avec React. Il contient les sections À propos, Services, Projets, et Contact.",
    w_images: [project1, project2, project3],
    anchor: "biblio"
  },
    {
      w_no: 3,
      w_name: "Web Design",
      w_img: project3,
      anchor: "loyaltea"
    },
    {
      w_no: 4,
      w_name: "Web Design",
      w_img: project4,
      anchor: "asuna-bijoux"
    },
    {
      w_no: 5,
      w_name: "Web Design",
      w_img: project5,
      anchor: "pointgame"
    },
    {
      w_no: 6,
      w_name: "Web Design",
      w_img: project6,
      anchor: "asuna-music"

    },
];

export default mywork_data;
