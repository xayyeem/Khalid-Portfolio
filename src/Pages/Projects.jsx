import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import Capture1 from '../assets/Capture1.png'
import Capture2 from '../assets/Capture2.png'
import Capture3 from '../assets/Capture3.png'
import '../Styles/Project.css'
import  { ProjectList } from '../Helper/ProjectList'


const Projects = () => {
  return (
    <div className="projects">
    <h1> My Personal Projects</h1>
    <div className="projectList">
      {ProjectList.map((project, idx) => {
        return (
          <ProjectItem id={idx} name={project.name} image={project.image} />
        );
      })}
    </div>
  </div>
  )
}

export default Projects