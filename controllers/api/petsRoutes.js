const router = require('express').Router();

router.get('/', (req,res) => {
res.send('petsroute')
})

module.exports = router;