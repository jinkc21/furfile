const router = require("express").Router();
const { Pet } = require("../../models");
const withAuth = require('../../utils/auth');

// Route api/pets

//If sign up new pets
router.post("/", withAuth, async (req, res) => {
  console.log("Incoming Pet Data: ", req.body)
  try {
    const newPet = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
      owner_id: req.session.user_id,
    });
     console.log("New Pet Data: ", newPet)
    res.status(200).json(newPet)
  } catch (err) {
    req.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const newPet = await Pet.update({
         
        });
        res.status(200).json(newPet)
      } catch (err) {
        req.status(400).json(err);
      }
   
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!petData) {
      res.status(400).json({ message: "No pet found with this id!" });
      return;
    }
    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
