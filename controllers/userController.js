const {User, Thought} = require('../models')

module.exports = {
    // Get all users
    async getUsers ( req, res) {
        try {
            const users = await User.find().populate({path: "thoughts", select: "-__v"})
            res.status(200).json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }

    },
    // Single User
    async getUser (req, res) {
        try{
            const user = await User.find({_id: req.params.id})
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Create User
    async createUser (req, res) {
        try{
            const user = await User.create(req.body)
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Update User
    async updateUser (req, res) {
        try{
            const user = await User.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {new: true, runValidators: true}
                )
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Delete User
    async deleteUser (req, res) {
        try{
            const user = await User.findOneAndDelete({_id: req.params.id})
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Add friend?
    async addFriend (req, res) {
        try{
            const user = await User.findOne({_id: req.params.id})
            const friend = await User.findOne({_id: req.params.friendId})

            const nowFriends = User.findOneAndUpdate(
                {_id: req.params.id},
                {$push: {friends: req.params.friendId}},
                {new: true}
            )

            const nowFriends2 = User.findOneAndUpdate(
                {_id: req.params.friendId},
                {$push: {friends: req.params.id}},
                {new: true}
            )
            res.status(200).json(nowFriends)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Delete friend?
    async deleteFriend (req, res) {
        try{
            res.status(200).json()
        } catch (err) {
            res.status(500).json(err)
        }
    }
}