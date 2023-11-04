const router = require('express').Router();
const apiRoutes = require('./api');

// All backend, should be using this
router.use('/api', apiRoutes);

// Any wrong URLs
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;