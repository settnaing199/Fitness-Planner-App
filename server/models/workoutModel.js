const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://workoutPlanner:work@fitnesstracker.mn7ho.mongodb.net/FitnessTracker?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "workoutPlanner",
})
.then(()=>{console.log('connected to MongoDB.')})
.catch(()=> console.log('cannot connect to MongoDB,' ,err));


const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    exerciseList : [
        {
            move: String,
            sets: Number,
            reps: Number,
            muscles: String,
        }
    ]
})
const Workouts = mongoose.model("Workouts", workoutPlanSchema);

module.exports = {
    Workouts
}