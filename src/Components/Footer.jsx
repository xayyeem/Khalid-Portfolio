import React from 'react'
import '../Styles/footer.css'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/Github";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link to={'https://www.instagram.com/zayyeem/?hl=bg' }> <InstagramIcon/> </Link>
            <Link to={'https://twitter.com/KhalidJafri11'}><TwitterIcon/></Link>
            <Link to={'https://www.facebook.com/zayeem.haider/'}><FacebookIcon/></Link>
            <Link to={'https://www.linkedin.com/in/khalid-haider-jafri-78368220a/'}><LinkedInIcon/></Link>
            <Link to={'https://github.com/xayyeem'}><GithubIcon/></Link>
        </div>
            <p>&copy; khalidhaiderjafri@gmail.com  </p> 
            
    </div>
  )
}

export default Footer