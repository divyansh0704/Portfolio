import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"
import "./shimmer.css"

const ProjectReview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://portfolio-qlwv.onrender.com/api/projects')
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
    <motion.section className="project-preview"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      // whileHover={{ scale: 1.05, y: -6 }}

      


    >

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >Latest Projects</motion.h2>
      {loading && <div className="project-grid">
          {[1, 2, 3].map((item) => (
            <div className="shimmer-card" key={item}>
              <div className="shimmer-content"></div>
            </div>
          ))}
        </div>}
      {projects.length === 0 && !loading && <p style={{color:'white'}}>No projects found.</p>}
      <div className="project-grid">
                {projects.map((project) => (
                  
                  <motion.div className='project-card' key={project.id}
                    whileHover={{scale: 1.02, y: -2  }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {project.image_url && (
                      <img src={project.image_url} alt={project.title} style={{ width: '100%', borderRadius: '10px' }} />
                    )}
                    <h3>{project.title}</h3>
                    <p className='desc'>{project.description}</p>
                    {/* <p><strong>Tech:</strong>{project.tech_stack}</p> */}
                    <div className="tech">
                      {project.tech_stack &&
                        project.tech_stack.trim().split(" ").map((tech, index) => (
                          <div className="techCap" key={index}>{tech}</div>
                        ))
                      }
                    </div>
                    <div className="project-buttons">
                      {project.github_link && (
                        <a href={project.github_link} target='_blank' rel='noreferrer' className="btn btn-github">GitHub</a>
                      )}
      
                      {project.live_link && (
                        <a href={project.live_link} target='_blank' rel='noreferrer' className="btn btn-live"> Live_Demo</a>
                      )}
      
                    </div>
      
                  </motion.div>
      
                ))}
              </div>
      
    </motion.section>
  )
}

export default ProjectReview