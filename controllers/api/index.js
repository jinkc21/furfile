const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petsRoutes = require('./petsRoutes');

router.use('/users', userRoutes);
router.use('/pets', petsRoutes);

module.exports = router;