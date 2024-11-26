const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

// Página de criação de álbum (GET)
router.get('/create', (req, res) => {
  res.render('albums/create-album'); // Renderiza o formulário de criação
});

// Criação de álbum (POST)
router.post('/create', albumController.createAlbum);

module.exports = router;
