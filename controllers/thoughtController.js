const { User, Thought } = require('../models');

module.exports = {
    // Get all
    async getThoughts (req, res) {
        try{
            const thoughts = await Thought.find()
            console.log(thoughts)
            res.status(200).json(thoughts)
        } catch (err) {
            console.log('Error: ', err)
            res.status(500).json(err)
        }
    },
    // Get one
    async getThought (req, res) {
        try{
            const thought = await Thoughts.find({_id: req.params.id})
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Create one
    async createThought (req, res) {
        try{
            const thought = await Thoughts.create(req.body)
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Update one
    async updateThought (req, res) {
        try{
            const thought = await Thoughts.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {new: true, runValidators: true}
            )
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Delete one
    async deleteThought (req, res) {
        try{
            const thought = await Thoughts.findOneAndDelete({_id: req.params.id})
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Create react
    async newReact (req, res) {
        try{
            res.status(200).json()
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Delete react
    async deleteReact (req, res) {
        try{
            res.status(200).json()
        } catch (err) {
            res.status(500).json(err)
        }
    },

}