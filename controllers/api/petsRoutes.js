const router = require('express').Router();
//const { Pet } = require('../../models');
// Route api/projects
router.get('/', (req,res) => {




    res.send('petsroute')
});


router.post('/',async (req,res) => {

    try {
        const newPet = await Pet.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newProject);
      } catch (err) {
        res.status(400).json(err);
      }

});


router.put('/', (req,res) => {

});

router.delete('/', (req,res) => {

});

module.exports = router;