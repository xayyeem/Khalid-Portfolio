import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import About from '../Pages/About'
const Navbar = () => {
    const[extendNavbar,setExtendNavbar]=useState(false);
    const location = useLocation();

    useEffect(()=>{
        setExtendNavbar(false)
    },[location])

  return (
    <div className='navbar' id={extendNavbar? "open":"close"}>
        <div className="toggleButton">
            <button onClick={()=>setExtendNavbar((prev)=>!prev)}><ReorderIcon/></button>
        </div>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/About">About </Link>

        </div>
    </div>
  )
}

export default Navbar