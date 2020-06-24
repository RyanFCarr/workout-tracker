const mongoose = require('mongoose');
mongoose.connect('mongodb://workoutApp:workoutpass2020@ds235411.mlab.com:35411/heroku_zlnn9bzc', {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {Workout: require('./workoutModel')};
