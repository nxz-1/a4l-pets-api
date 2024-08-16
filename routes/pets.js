const express = require('express');
const router = express.Router();

// Sample data (in-memory for now)
let pets = [
    { id: 1, name: 'Fido', type: 'Dog' },
    { id: 2, name: 'Whiskers', type: 'Cat' },
];

// Get all pets
router.get('/a4l-pets', (req, res) => {
    res.status(200).json(pets);
});

// Add a new pet
router.post('/a4l-pets', (req, res) => {
    const newPet = req.body;
    newPet.id = pets.length + 1;
    pets.push(newPet);
    res.status(201).json(newPet);
});

// Get a specific pet
router.get('/a4l-pets/:id', (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    res.status(200).json(pet);
});

// Update a pet
router.put('/a4l-pets/:id', (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    if (!pet) return res.status(404).json({ message: 'Pet not found' });
    Object.assign(pet, req.body);
    res.status(200).json(pet);
});

// Delete a pet
router.delete('/a4l-pets/:id', (req, res) => {
    pets = pets.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;