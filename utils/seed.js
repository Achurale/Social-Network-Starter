const connection = require('../config/connection')
const { User, Thought } = require('../models')
const userSeed = require('./userSeed.json')
const thoughtSeed = require('./thoughtSeed.json')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log("Seeding started")

    await User.deleteMany({});
    await Thought.deleteMany({});

    console.log("Collection reset")

    await User.collection.insertMany(userSeed)
    await Thought.collection.insertMany(thoughtSeed)

    console.log('Collection seeded successfully')
})