const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    mood: String,
    food: String,
    sleep: Number,
    work: Number,
    exercise: Number, 
    meditation: Number, 
    bdTime: Number,
    screenTime: Number,
    socialTime: Number,
    natureTime: Number,
  }, {
    timestamps: true,
  });

module.exports = mongoose.model('Habit', habitSchema);