const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Formulário de criação
router.get('/create', genreController.createForm);
// Enviar dados para criar um novo gênero
router.post('/create', genreController.create);

module.exports = router;
