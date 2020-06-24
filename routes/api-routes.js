const router = require("express").Router();
const db = require("../models");

router.get('/api/workouts', async (req, res) => {
  let workouts = await db.Workout.find();
  let newWorkouts = workouts.map((workout) => {
    return {
      _id: workout._id,
      day: workout.day,
      exercises: workout.exercises.map((exercise) => {
        let { exercisetype, _id, name, duration, weight, reps, sets, distance } = exercise;
        return {
          _id,
          type: exercisetype,
          name,
          duration,
          weight,
          reps,
          sets,
          distance
        };
      })
    }
  });
  res.json(newWorkouts);
});

router.put('/api/workouts/:id', async (req, res) => {
  let workout = await db.Workout.findOne({ _id: req.params.id });
  let newWorkout = req.body;
  newWorkout.exercisetype = newWorkout.type;
  delete newWorkout.type;
  workout.exercises.push(newWorkout);
  let result = await workout.save();
  res.json(result).sendStatus(200);
});

router.post('/api/workouts', ({ body }, res) => {
  db.Workout.create(body)
  .then(newDocument => {
    res.json(newDocument).sendStatus(201);
  })
  .catch(({ message }) => {
    console.error(message);
    res.sendStatus(500)
  });
});






module.exports = router;