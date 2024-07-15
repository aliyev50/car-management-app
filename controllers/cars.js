const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

  
  router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      res.render('cars/index.ejs', {
        cars: currentUser.cars,
      });
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  });


  router.get('/new', async (req, res) => {
    res.render('cars/new.ejs');
  });

  router.post('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      currentUser.cars.push(req.body);
      console.log(req.body)
      await user.save();
      res.redirect(`/users/${currentUser._id}/cars`);
    } catch (error) {
      res.redirect('/')
    }
  });

  router.delete('/:carId', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      currentUser.cars.id(req.params.carId).deleteOne();
      await currentUser.save();
      res.redirect(`/users/${currentUser._id}/cars`);
    } catch (error) {
      res.redirect('/')
    }
  });

  router.get('/:carId/edit', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      const car = currentUser.applications.id(req.params.carId);
      res.render('cars/edit.ejs', {
        car: car,
      });
    } catch (error) {
      res.redirect('/')
    }
  });



module.exports = router;