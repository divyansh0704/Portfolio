import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import BASE_URL from '../utils/api'

const ProjectReview = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("https://portfolio-c40n.onrender.com/api/projects")
      .then(res => {
        setProjects(res.data.slice(0, 3));
      })
      .catch(err => {
        console.error("error fetching projects", err.message)
      });

  }, [])
  return (
    <section className="project-preview">
      <h2>Latest Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className='project-card' key={project.id}>
            {project.image_url ? (
              <img
                src={`https://portfolio-c40n.onrender.com${project.image_url}`}
                alt={project.title}
              />
            ) : (
              <img
                src="/placeholder.png"  // 👈 create this in public folder
                alt="No image"
              />
            )}
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong>{project.tech_stack}</p>
              <p>
                <a href={project.github_link} target='_blank' rel='noreferrer'>GitHub</a>
                <a href={project.live_link} target='_blank' rel='noreferrer'>    Live_Demo</a>
              </p>
            </div>



          </div>

        ))}
      </div>
    </section>
  )
}

export default ProjectReview