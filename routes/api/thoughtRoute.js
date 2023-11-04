const router = require('express').Router();
const { getThoughts, getThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtController')

// Get all | /api/thoughts/
router.route('/').get(getThoughts).post(createThought)

// Get one | /api/thoughts/:id
router.route('/:id').get(getThought).put(updateThought).delete(deleteThought)

module.exports = router;