import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/asuna_logo2.png'
import underline from '../../assets/tiret2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/burger.ico'
import menu_close from '../../assets/menu_close.png'
const Navbar = () => {

  const [menu,setMenu]=useState("home");
  const menuref =useRef();
  const openMenu =()=>{
    menuref.current.style.right="0";
  }
  const closeMenu =()=>{
    menuref.current.style.right="-350px";
  }
  return (
    <div className='navbar'>  
      <img src={logo} alt='' width={200} />
      <img src={menu_open} onClick={openMenu} width={50} className='nav-mob-open' />
      <ul ref={menuref} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"  width={50}/>
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=== "home" ?<img src={underline} alt=' ' width={50}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu=== "about" ?<img src={underline} alt=' ' width={50}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=== "services" ?<img src={underline} alt=' ' width={50}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu=== "work" ?<img src={underline} alt=' ' width={50}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=== "contact" ?<img src={underline} alt=' ' width={50}/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
