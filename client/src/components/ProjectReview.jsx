import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProjectReview = () => {
  const [projects, setProjects] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://portfolio-gdlr.onrender.com/api/projects')
      .then(res => {
        setProjects(res.data.slice(0, 3));
        setLoading(false);


      })
      .catch(err => {
        console.error("error fetching projects", err.message);
        setLoading(false);
      });

  }, [])
  return (
    <section className="project-preview">
      <h2>Latest Projects</h2>
      {loading && <p>Loading projects...</p>}
      {projects.length === 0 && !loading && <p>No projects found.</p>}
      <div className="project-grid">
        {projects.map((project) => (
          <div className='project-card' key={project.id}>
            {project.image_url ? (
              <img
                src={`https://portfolio-gdlr.onrender.com${project.image_url}`}
                alt={project.title}
              />
            ) : (
              <img
                src="/placeholder.png"  // 👈 create this in public folder
                alt="No image"
              />
            )}
            {/* {project.image_url && (
              <img src={`http://localhost:3007${project.image_url}`} alt={project.title} style={{ width: '100%', borderRadius: '10px' }} />
            )} */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong>{project.tech_stack}</p>
              <div className="project-buttons">
                <a href={project.github_link} target='_blank' rel='noreferrer' className="btn btn-github">GitHub</a>
                <a href={project.live_link} target='_blank' rel='noreferrer' className="btn btn-live">Live_Demo</a>
              </div>
            </div>



          </div>

        ))}
      </div>
    </section>
  )
}

export default ProjectReview