const sequelize = require("../config/db")
const {DataTypes}=require("sequelize")

const Project = sequelize.define("Project",{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT
    },
    tech_stack:{
        type: DataTypes.TEXT
    },
    github_link:{
        type: DataTypes.STRING
    },
    live_link:{
        type: DataTypes.STRING
    },
    image_url:{
        type: DataTypes.STRING
    }
},{
    timestamps:true
});

module.exports = Project;