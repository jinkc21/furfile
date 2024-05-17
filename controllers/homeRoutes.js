const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (!req.session.logged_in) {
  //   res.redirect('/login');
  //   return;
  // }
  res.render('homepage', {logged_in: req.session.logged_in});
});

router.get('/user-profile', withAuth, async (req, res) => {
  try {
    // console.log(req.session.user_id)
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pet }],
    });
    const petData = await Pet.findAll({
      where: {
        owner_id: req.session.user_id
      }
    });
    // console.log('pet data :', petData)
    const user = userData.get({ plain: true });
    const pets = petData.map((pet) =>
      pet.get({ plain: true })
  );
    user.Pets = pets
    // console.log('profile data :', user, pets)
    res.render('user-profile', {
      ...user,
      ...pets,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pets/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const pet = petData.get({ plain: true });
//  console.log(pet)
    res.render('pet-profile', {
      ...pet,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/user-profile');
    return;
  }

  res.render('login');
});

module.exports = router;
