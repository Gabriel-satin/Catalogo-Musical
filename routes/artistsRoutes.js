const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

// Formulário de criação
router.get('/create', artistController.createForm);
// Enviar dados para criar um novo artista
router.post('/create', artistController.create);

module.exports = router;
