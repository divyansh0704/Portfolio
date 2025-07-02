import React from 'react'
import axios from 'axios'
import { useState ,useRef} from 'react'

import Navbar from '../components/Navbar'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASS

const AddProject = () => {

  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false)
  const fileInputRef = useRef(); 
  const [file,setFile]=useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    tech_stack: '',
    github_link: '',
    live_link: '',
    image_url: ''
  });

  const [status, setStatus] = useState("")
  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Wrong password!")
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleFileChange = (e) =>{
    setFile(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('tech_stack', form.tech_stack);
    formData.append('github_link', form.github_link);
    formData.append('live_link', form.live_link);
    if(file){
      formData.append('image', file);
    }
    try {
      await axios.post("http://localhost:3007/api/projects/add", formData,{
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setStatus(" ✅ Project added successfullt!")
      setForm({
        title: '',
        description: '',
        tech_stack: '',
        github_link: '',
        live_link: '',
        image_url: ''
      })
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = null;

    } catch (error) {
      console.error(error);
      setStatus("❌error adding project.")


    }
  }


  return (
    <>
      <Navbar />
      <section className='about'>
        <h2>Add New Project (Admin Panel) </h2>
        {!authenticated ? (
          <form onSubmit={handlePasswordSubmit} style={{ maxWidth: '400px' }}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" style={{ marginTop: '10px' , padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Authenticate
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input type="text" name="title" placeholder='Title' value={form.title} onChange={handleChange} required />
            <textarea name="description" placeholder='Description' value={form.description} onChange={handleChange} required />
            <input type="text" name="tech_stack" placeholder='Tech Stack (e.g. React, Node.js)' value={form.tech_stack} onChange={handleChange} />
            <input type="url" name="github_link" placeholder="GitHub Link" value={form.github_link} onChange={handleChange} />
            <input type="url" name="live_link" placeholder="Live Link" value={form.live_link} onChange={handleChange} />
            <input type="file" accept='image/*' ref={fileInputRef} onChange={handleFileChange} />
            <button type='submit' style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Add Project
            </button>
            {status && <p style={{ marginTop: '15px', color: status.includes('✅') ? 'green' : 'red' }}>{status}</p>}
          </form>
        )}



      </section >
    </>
  )
}

export default AddProject