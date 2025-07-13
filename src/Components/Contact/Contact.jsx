import React from 'react'
import './Contact.css'
import theme from '../../assets/tiret2.png'
import mail from '../../assets/mail.ico'
import fb from '../../assets/facebook.ico'
import insta from '../../assets/instagram.ico'
import linkedin from '/linkedin.svg'
import numero from '../../assets/numero.ico'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "75cf94b1-982a-4039-825e-fd5f8aea2ba2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt=""  width={100}/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Je suis actuellement disponible pour prendre de nouveaux projets, n’hésitez pas à m’envoyer un message pour tout ce sur quoi vous souhaitez que je travaille. Vous pouvez me contacter à tout moment.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail} alt="" width={50} /><p>ianissarakotoarimalala820@gmail.com</p>
                </div>
                {/* <div className="contact-detail">
                    <img src={fb} alt="" width={50}/><p>lien facebook</p>
                </div> */}
                {/* <div className="contact-detail">
                  <img src={insta} alt="" width={40}/><p>lien insta</p>
                </div> */}
                {/* <div className="contact-detail">
                  <img src={localisation} alt="" width={50}/><p>adresse</p>
                </div> */}
                <div className="contact-detail">
                  <img src={linkedin} alt="" width={50}/><p>ianissa RAKOTOARIMALALA</p>
                </div>
                <div className="contact-detail">
                  <img src={numero} alt="" width={50}/><p>+261381942967</p>
                </div>
            </div>
        </div>
    <form onSubmit={onSubmit} className='contact-right ' >
        <label htmlFor=''>Your Name</label>
        <input type="text" placeholder='enter your name' name='name' />
        <label htmlFor="">Your email</label>
        <input type="text" placeholder='Enter your email' name='email'/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message"   rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit'> Submit now</button>
    </form>

      </div>
    </div>
  )
}
 
export default Contact
