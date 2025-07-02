import React from 'react'
import Navbar from '../components/Navbar'
import "../App.css"

const Services = () => {
  return (
    <>
      <Navbar />
      <section className='about'>
        <h2>📚Custom College Projects (Services)</h2>
        <p> Need a mini or major project for your college? I create custom projects using the MERN stack (MongoDB, Express, React, Node.js), and also with MySQL, Admin Panels, login systems, etc.</p>
        <h3>💡Mini Project Ideas</h3>
        <ul>
          <li>🛒 E-commerce Product Showcase</li>
          <li>📆 Task Manager with Deadline Alerts</li>
          <li>📗 Online Notes App with Login</li>
          <li>💬 Feedback/Confession System</li>
          <li>🎓 Student Attendance Dashboard</li>
          <li>📊 Admin Panel for College Records</li>
        </ul>
        <h3>📞Contact to order</h3>
         <div style={{ marginTop: '15px' }}>
          <a
            href="https://wa.me/919306621131"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#25D366',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              marginRight: '10px'
            }}
          >
            📱 WhatsApp Me
          </a>

          <a
            href="https://forms.gle/3LYBF4Nimhy85syL6"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#4285F4',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px'
            }}
          >
            📝 Fill Project Form
          </a>
        </div>

      </section>
    </>
  )
}

export default Services