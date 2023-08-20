var express = require('express');
var router = express.Router();

const Project = require("../models/Project");

const isAuthenticated = require('../middleware/isAuthenticated');
const isKirs = require("../middleware/isKirs");


// DISPLAY PROJECTS 
router.get('/', (req, res, next) => {
  
  Project.find()
      .then((allProjects) => {
          res.json(allProjects)
      })
      .catch((err) => {
          console.error(err); 
          next(err)
      })

});

//ADD A NEW PROJECT 
router.post('/new-project', isAuthenticated, isKirs, (req, res, next) => {
  console.log("Received POST request at /new-project");

  const { owner, title, image,  description, link } = req.body

  Project.create(
      { 
          owner, 
          title, 
          image,  
          description, 
          link 
      }
      )
      .then((newProject) => {
          res.json(newProject)
      })
      .catch((err) => {
          console.log(err)
          next(err)
      })

})

//UPDATE PROJECT INFO
router.post('/project-update/:projectId', isAuthenticated, isKirs, (req, res, next) => {

  const { projectId } = req.params

  const { title, image,  description, link } = req.body

  Project.findByIdAndUpdate(
      projectId,
      {
        title, 
        image,  
        description, 
        link 
      },
      { new: true}
  )
      .then((updatedProject) => {
          res.json(updatedProject)
      })
      .catch((err) => {
          console.log(err)
          next(err)
      })

})

//DELETE PROJECT
router.post('/delete-project/:projectId', isAuthenticated, isKirs, (req, res, next) => {

  const { projectId } = req.params

  Project.findByIdAndDelete(projectId)
      .then((deletedProject) => {
          res.json(deletedProject)
      })
      .catch((err) => {
          console.log(err)
          next(err)
      })

})


module.exports = router;
