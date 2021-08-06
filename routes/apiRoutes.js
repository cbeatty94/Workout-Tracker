const router = require('express').Router();
const {Workout} = require('../models');

router.get('/api/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find()
         res.json(workouts)
    } catch (err) {res.json(err);}    
})

router.put('/api/workouts/:id', async (req, res) => {
    try{
        const workout = await Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body }
        }, { new: true })
        res.json(workout)
    } catch (err) {res.json(err);}
})

router.post('/api/workouts', async (req, res) => {
    try {
        const workout = await Workout.create(body)
        res.json(workout)
    } catch (err) {res.json(err);}
})

router.get('/api/workouts/range', async (req, res) => {
    try {
        const workouts = await Workout.find().limit(7)
         res.json(workouts)
    } catch (err) {res.json(err);}  
})







module.exports = router