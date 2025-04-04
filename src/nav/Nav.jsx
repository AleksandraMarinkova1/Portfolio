import React from 'react'
import './nav.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState } from 'react'




const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav>
      
       <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><HomeIcon/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><PersonIcon/></a>
       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><LaptopMacIcon/></a>
       <a href="#myprojects" onClick={() => setActiveNav('#myprojects')} className={activeNav === '#myprojects' ? 'active': ''}><FactCheckIcon  /></a>
       <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}><MailOutlineIcon/></a>
      
    </nav>
  )
}

export default Nav;