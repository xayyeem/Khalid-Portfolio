import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/Github";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
// import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
const Home = () => {
  return (
    <div className='home'>
        <div className="about">
            <h2>Hi my name is Khalid</h2>
            <div className="prompt">
                <p>Passionate Creator and Learner</p>
                <Link to={'https://www.linkedin.com/in/khalid-haider-jafri-78368220a/'}><LinkedInIcon/></Link>
                <Link to={'https://github.com/xayyeem'}><GithubIcon/></Link>
                <Link to={'mailto:khalidhaiderjafri@gmail.com'}><EmailIcon/></Link>
                <Link to={'https://drive.google.com/file/d/1lB7lMW1ywY2hZfX-QmYCx2fpnTJhfwqK/view?usp=drive_link'}><AssignmentReturnedIcon/></Link>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="items">
                    <h2>FrontEnd</h2>
                    <span>HTML5, CSS, JavaScript, React.js, Bootstrap, MaterialUI, NPM</span>
                </li>
                <li className="items">
                    <h2>BackEnd</h2>
                    <span>Node.js, Express.js</span>
                </li>
                <li className="items">
                    <h2>DataBase</h2>
                    <span>MongoDB, MYSQL</span>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Home