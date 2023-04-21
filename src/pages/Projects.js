import React,{useEffect} from 'react'
import ProjectItem from '../components/ProjectItem'
import {ProjectList} from '../helpers/ProjectList'

import '../styles/Project.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {
  useEffect(()=> {
    AOS.init({
      duration:2000
    });
    AOS.refresh();
  }, [])


  return (
    <div className="projects">
      <h1>My Personnal Projects</h1>
      <div className="projectList" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     >
       {ProjectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image = {project.image}/>
       })}

      </div>
    </div>
  )
}

export default Projects