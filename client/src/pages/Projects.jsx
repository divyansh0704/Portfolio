import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import "../App.css"



const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://portfolio-gdlr.onrender.com/api/projects")
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("failed to fetch projects", err);
        setLoading(false);

      })
  })
  return (
    <>
      <Navbar />
      <section className="project-preview">
        <h2>All Projects</h2>
        {loading && <p>Loading projects...</p>}
        {projects.length === 0 && !loading && <p>No projects found.</p>}
        <div className="project-grid">
          {projects.map((project) => (
            <div className='project-card' key={project.id}>
              {project.image_url && (
                <img src={`https://portfolio-gdlr.onrender.com${project.image_url}`} alt={project.title} style={{ width: '100%', borderRadius: '10px' }} />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong>{project.tech_stack}</p>
              <div className="project-buttons">
                <a href={project.github_link} target='_blank' rel='noreferrel' className="btn btn-github">GitHub</a>
                <a href={project.live_link} target='_blank' rel='noreferrel' className="btn btn-live"> Live_Demo</a>
              </div>

            </div>

          ))}
        </div>
      </section>
    </>
  )
}

export default Projects