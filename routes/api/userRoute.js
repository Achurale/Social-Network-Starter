const router = require('express').Router();
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../../controllers/userController')

// Get all | /api/users/
router.route('/').get(getUsers).post(createUser)

// Get one | /api/users/:id
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router;