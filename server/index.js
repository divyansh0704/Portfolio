const express = require("express");
const cors = require("cors");
require('dotenv').config();
const sequelize = require("./config/db");
const Project = require("./models/projects")
const projectRoutes = require("./routes/projectRoutes");
const allowedOrigins = [
  "https://portfolio-git-master-divyanshs-projects-e0500169.vercel.app",
  "http://localhost:5173"
];





const PORT = process.env.PORT || 3007;
const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use('/uploads',express.static('uploads'))



sequelize.authenticate()
 .then(()=>console.log("database is connected successfully"))
 .catch((err)=>console.error("database not connected",err))

sequelize.sync()
 .then(()=>console.log("Database synced"))
 .catch((err)=>console.error("Database not synced",err))

app.use("/api/projects",projectRoutes);


app.listen(PORT,()=>console.log(`server is running on ${PORT}`))