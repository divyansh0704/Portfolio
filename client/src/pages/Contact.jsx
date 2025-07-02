import React from 'react'
import Navbar from '../components/Navbar'
import "../App.css"

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <h2>📬 Contact Me</h2>
        <p>
          I'd love to connect! Reach out to me for freelance projects, collaborations, or any tech queries.
        </p>

        <div style={{ marginTop: '20px' }}>
          <p>📧 Email: <a href="mailto:sainidivyansh2005@gmail.com.com">sainidivyansh2005@gmail.com</a></p>
          <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/divyansh-saini-004683286/" target="_blank" rel="noreferrer">linkedin.com/in/divyansh-saini</a></p>
          <p>💻 GitHub: <a href="https://github.com/divyansh0704" target="_blank" rel="noreferrer">github.com/divyansh0704</a></p>
        </div>

        <h3 style={{ marginTop: '40px' }}>📨 Quick Message (Optional)</h3>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled style={{ backgroundColor: "#999", color: "#fff", border: "none", padding: "10px", borderRadius: "5px" }}>
            Coming Soon...
          </button>
        </form>
      </section>
    </>
  )
}

export default Contact