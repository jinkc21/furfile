const router = require("express").Router();
const { Pet } = require("../../models");

// Route api/pets

//If sign up new pets
router.post("/", async (req, res) => {
  try {
    const newUser = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newUser)
  } catch (err) {
    req.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
    try {
        const newUser = await Pet.update({
         
        });
        res.status(200).json(newUser)
      } catch (err) {
        req.status(400).json(err);
      }
   
});

router.delete("/:id", async (req, res) => {
  try {
    const userData = await Pet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!userData) {
      res.status(400).json({ message: "No user found with this id!" });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
