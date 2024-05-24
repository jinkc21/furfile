const router = require("express").Router();
const { Pet } = require("../../models");
const withAuth = require("../../utils/auth");

// Route api/pets

//If sign up new pets
router.post("/", withAuth, async (req, res) => {
  console.log("Incoming Pet Data: ", req.body);
  let petAltered = req.body.petAltered.toLowerCase();
  if (petAltered === "true") {
    petAltered = true;
  } else if (petAltered === "false") {
    petAltered = false;
  }
  try {
    const newPet = await Pet.create({
      name: req.body.petName,
      type: req.body.petType,
      breed: req.body.petBreed,
      birthdate: req.body.petBirthdate,
      weight: req.body.petWeight+'lbs',
      gender: req.body.petGender,
      altered: petAltered,
      microchip: req.body.petMicrochip,
      vaccinations: req.body.petVaccinations,
      allergies: req.body.petAllergies,
      user_id: req.session.user_id,
      owner_id: req.session.user_id,
      image: req.body.imgCdn,
    });
    console.log("New Pet Data: ", newPet);
    res.status(200).json(newPet);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  console.log("Body Data: ", req.body)
  console.log("Params Data: ", req.params)
  try {
    const newPet = await Pet.update({
      where: {
        id: req.params.id
      },
    });
    console.log("Updated: ", newPet)
    res.status(200).json(newPet);
  } catch (err) {
    console.log("error: ", err);
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
