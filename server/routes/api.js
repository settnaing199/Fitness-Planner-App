const express = require('express');
//controller
const workoutController = require('../controllers/workoutController');
//route
const router = express.Router();



router.get('/', workoutController.getWorkouts, (req,res)=>{
    res.status(202).send(res.locals)
})

router.post('/', workoutController.addWorkouts, (req,res)=>{
    res.status(202).send('post Request')
})





module.exports = router;