import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import "../App.css"
import "./shimmer.css"
import { motion } from 'framer-motion'



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
      

      <motion.section className="project-preview"

      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >All Projects</motion.h2>
        {/* {loading && <p>Loading projects...</p>} */}
        {loading && (
        <div className="project-grid">
          {[1, 2, 3, 4, 5, 6,7,8].map((item) => (
            <div className="shimmer-card" key={item}>
              <div className="shimmer-content"></div>
            </div>
          ))}
        </div>
      )}
        {projects.length === 0 && !loading && <p>No projects found.</p>}
        <div className="project-grid">
          {projects.map((project) => (
            <motion.div className='project-card' key={project.id}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {project.image_url && (
                <img src={`https://portfolio-gdlr.onrender.com${project.image_url}`} alt={project.title} style={{ width: '100%', borderRadius: '10px' }} />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* <p><strong>Tech:</strong>{project.tech_stack}</p> */}
              <div className="project-buttons">
                <a href={project.github_link} target='_blank' rel='noreferrel' className="btn btn-github">GitHub</a>
                {project.github_link && (
                  <a href={project.live_link} target='_blank' rel='noreferrel' className="btn btn-live"> Live_Demo</a>
                )}

              </div>

            </motion.div>

          ))}
        </div>
      </motion.section>
    </>
  )
}

export default Projects