const express = require('express');
const Waiter = require('../models/Waiter');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const waiters = await Waiter.findAll();
    res.json(waiters);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter garçons' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, age, salary, yearsOfExperience, contactNumber, email, hireDate, isActive, restaurantId, profilePictureUrl, description, rating } = req.body;
    const waiter = await Waiter.create({ name, age, salary, yearsOfExperience, contactNumber, email, hireDate, isActive, restaurantId, profilePictureUrl, description, rating });
    res.status(201).json(waiter);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar garçom' });
  }
});

module.exports = router;
