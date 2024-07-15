const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

  
  router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id); 
      console.log("current user", currentUser);
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
      console.log("BODY", req.body);
      console.log("second user", currentUser);
      await currentUser.save();
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
      const car = currentUser.cars.id(req.params.carId);
      res.render('cars/edit.ejs', {
        car: car,
      });
    } catch (error) {
      res.redirect('/')
    }
  });

  router.put('/:carId', async (req, res) => {
    const user = await User.findById(req.session.user._id);
    const carItem = user.car.id(req.cars.itemId);
    carItem.set(req.body);
    await user.save();
    res.redirect(`/users/${req.session.user._id}/cars`);
  });



module.exports = router;