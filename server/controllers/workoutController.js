const {Workouts} = require('../models/workoutModel');

const workoutController = {}

workoutController.getWorkouts = async (req,res,next)=>{
    try{
        await Workouts.find({}, (err,result)=>{
            res.locals = result;
            
            next();
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}


workoutController.addWorkouts = async (req,res, next)=>{
    const data = req.body;
    // console.log(data);
    // const data = {exerciseList : [{move: "a", reps:2, sets:3}]}
    try {
        await Workouts.create({exerciseList: data});
        next();
      }
      catch(err){
        console.log(err)
        next(err);
    }
}

module.exports = workoutController;