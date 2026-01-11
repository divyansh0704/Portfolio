const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary")
// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, "uploads/")
        
//     },
//     filename: (req, file, cb) =>{
//         const uniqueName = Date.now()+'_'+file.originalname;
//         cb(null, uniqueName);
//     }
// })
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", 
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({storage})
module.exports = upload;