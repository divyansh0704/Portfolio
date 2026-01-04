# DIVYANSH SAINI – PORTFOLIO

A modern, responsive Full-Stack Developer Portfolio built with React, Framer Motion, Node.js, and PostgreSQL, showcasing my projects, skills, and experience with smooth animations and a clean UI.

🌐 Live Website: https://your-portfolio.vercel.app
🛠 Backend API: https://your-backend.onrender.com

## Features

- Modern UI with Framer Motion animations

- Dark, professional design system

- Fully responsive (mobile-first)

- Social media integration (GitHub, LinkedIn, Instagram, LeetCode)

- Dynamic projects fetched from backend API

- Image upload support for projects

- Client-side routing with React Router

- Production-ready deployment (Vercel + Render)

## Tech Stack

### Frontend

- React (Vite)

- React Router DOM

- Framer Motion

- Axios

- CSS / Modern UI styling

### Backend

- Node.js

- Express.js

- PostgreSQL

- Sequelize ORM

- Multer (image uploads)

### Deployment

- Frontend: Vercel

- Backend: Render

## Project Structure

Portfolio/
├── client/        # React frontend
│   ├── src/
│   ├── components/
│   └── pages/
│
├── server/        # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── uploads/


## Setup Backend

cd server
npm install
npm start


## Setup Frontend

cd client
npm install
npm run dev


## Routing Fix
 
{
  "rewrites": [            # vercel.json
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}

## What I Learned From This Project

- Building a real-world full-stack application

- Proper frontend & backend separation

- Handling SPA routing in production

- Creating smooth animations with Framer Motion

- Deploying and connecting services (Vercel + Render)

- Writing clean, reusable React components

## Author

Divyansh Saini
Full-Stack Developer | MERN | Java
