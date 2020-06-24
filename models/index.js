const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {Workout: require('./workoutModel')};
