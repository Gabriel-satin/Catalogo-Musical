const Album = require('../models/album'); // Certifique-se de que o modelo Album está correto

const albumController = {
  // Outros métodos...

  createAlbum: async (req, res) => {
    try {
      const { title, year, cover, tracks } = req.body; // Campos do formulário
      await Album.create({
        title,
        year,
        cover,
        tracks, // Certifique-se de que "tracks" está configurado corretamente no banco de dados
      });
      res.redirect('/albums'); // Redireciona para a lista de álbuns
    } catch (error) {
      console.error('Erro ao criar álbum:', error);
      res.status(500).send('Erro ao criar álbum');
    }
  },
};

module.exports = albumController;
