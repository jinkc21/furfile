const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',withAuth, async (req, res) => {
  const user = req.session.user;
  try {

    const userData = await User.findByPk(req.params.id, {
      
      include: [{ model: Pet}],
    });


    const users = userData.get({ plain: true });


    res.render('homepage', {
      user,
      logged_in: req.session.logged_in
    });


  } catch (err) {
    res.status(500).json(err);
  }
});











router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
