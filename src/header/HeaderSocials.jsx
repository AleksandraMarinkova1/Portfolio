import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeaderSocials = () => {
  return (
    
    <div className="header__socials" style={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        position: 'absolute',
        left: '0',
        bottom: '3rem'}}>

        <a href="https://www.linkedin.com/in/aleksandra-marinkova-964ba3235/" target="_blank" rel='noreferrer'><LinkedInIcon/></a>
        <a href="https://github.com/AleksandraMarinkova1?tab=repositories" target="_blank" rel='noreferrer'><GitHubIcon/></a>
    </div>
  )
}

export default HeaderSocials;