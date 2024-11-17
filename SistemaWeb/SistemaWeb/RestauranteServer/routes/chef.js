const express = require('express');
const Chef = require('../models/Chef');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const chefs = await Chef.findAll();
    res.json(chefs);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter chefs' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, speciality, salary, yearsOfExperience, contactNumber, email, hireDate, isActive, restaurantId, profilePictureUrl, description, rating } = req.body;
    const chef = await Chef.create({ name, speciality, salary, yearsOfExperience, contactNumber, email, hireDate, isActive, restaurantId, profilePictureUrl, description, rating });
    res.status(201).json(chef);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar chef' });
  }
});

module.exports = router;
