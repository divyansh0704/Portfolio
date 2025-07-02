import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import "../App.css"



const Projects = () => {
  const [projects,setProjects] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3007/api/projects")
     .then(res=>setProjects(res.data))
     .catch(err=>console.error("failed to fetch projects",err))
  })
  return (
    <>
      <Navbar/>
      <section className="project-preview">
        <h2>All Projects</h2>
        <div className="project-grid">
          {projects.map((project)=>(
            <div className='project-card'key={project.id}>
              {project.image_url && (
              <img src={`http://localhost:3007${project.image_url}`} alt={project.title} style={{ width: '100%', borderRadius: '10px' }} />
            )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong>{project.tech_stack}</p>
              <a href={project.github_link} target='_blank' rel='noreferrel'>GitHub</a>
              <a href={project.live_link} target='_blank' rel='noreferrel'> Live_Demo</a>
              
            </div>
            
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects