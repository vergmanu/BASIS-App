const Habit = require('../../models/habit')

module.exports = {
    create,
    index,

};


async function create(req, res) {
    req.body.user = req.user._id
    await Habit.create(req.body)
    res.status(201).json('')
}

async function index(req, res) {
    const habits = await Habit.find({user: req.user._id})
    res.json(habits)
}



