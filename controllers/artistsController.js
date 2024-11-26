const { Artist } = require('../models');

const artistController = {
    createForm: (req, res) => {
        res.render('artists/create'); // Renderiza o formulário
    },

    create: async (req, res) => {
        try {
            const { name, genre } = req.body;
            await Artist.create({ name, genre });
            res.redirect('/artists'); // Redireciona para a lista de artistas
        } catch (error) {
            console.error('Erro ao criar artista:', error);
            res.status(500).send('Erro ao criar artista.');
        }
    }
};

module.exports = artistController;
