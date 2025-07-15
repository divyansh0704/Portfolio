const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const Project = require("./models/projects")
const projectRoutes = require("./routes/projectRoutes");


const PORT = process.env.PORT || 3007;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'))

app.get("/", (req, res) => {
  res.send("🚀 Portfolio backend is live!");
});



sequelize.authenticate()
 .then(()=>console.log("Connected to neon PostgreSQL"))
 .catch((err)=>console.error("database not connected",err))

sequelize.sync()
 .then(()=>console.log("Database synced"))
 .catch((err)=>console.error("Database not synced",err))

app.use("/api/projects",projectRoutes);


app.listen(PORT,()=>console.log(`server is running on ${PORT}`))
