const express = require("express");
const{
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutControllers")


const router = express.Router();

// GET All Workout
router.get("/", getWorkouts)



// GET Single Workout
router.get("/:id", getWorkout)



// POST New  Workout
router.post("/", createWorkout)
    


// DELETE WORKOUT
router.delete("/:id", deleteWorkout)



// UPDATE WORKOUT
router.patch("/:id", updateWorkout)



module.exports = router