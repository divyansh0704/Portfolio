const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload")
const {createProject,getProjects, deleteProject, updateProject} = require("../controllers/projectControllers");

router.post("/add",upload.single("image"),createProject);
router.get("/",getProjects);
router.delete("/:id", deleteProject);
router.put("/:id", upload.single("image"),updateProject);

module.exports = router;