const router = require("express").Router();
const db = require("../models");

router.get('/api/workouts', async (req, res) => {
  let workouts = await db.Workout.find();
 
  res.json(workouts);
});

router.put('/api/workouts/:id', async (req, res) => {
  let workout = await db.Workout.findOne({ _id: req.params.id });
  workout.exercises.push(req.body);
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

router.get('/api/workouts/range', async (req, res) => {
  res.json(await db.Workout.find().limit(7));
})

module.exports = router;
