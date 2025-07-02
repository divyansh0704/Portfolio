const Project = require("../models/projects");

exports.createProject = async(req,res)=>{
    try{
        const {title,description,tech_stack,github_link,live_link}=req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}`:'';
        const project = await Project.create({
            title,
            description,
            tech_stack,
            github_link,
            live_link,
            image_url
        });
        res.status(201).json(project);

    }catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.getProjects = async(req,res)=>{
    try{
        const projects = await Project.findAll({order:[['createdAt','DESC']]});
        res.status(200).json(projects);

    }catch{
        res.status(400).json({error:"Error fetching projects"})
    }
}
exports.deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    await project.destroy();
    res.json({ message: '✅ Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, tech_stack, github_link, live_link } = req.body;

    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    const updatedData = {
      title,
      description,
      tech_stack,
      github_link,
      live_link
    };

    if (req.file) {
      updatedData.image_url = `/uploads/${req.file.filename}`;
    }

    await project.update(updatedData);
    res.status(200).json({ message: "Project updated successfully", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
