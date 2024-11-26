const { Genre } = require('../models');

const genreController = {
    createForm: (req, res) => {
        res.render('genres/create'); // Renderiza o formulário
    },

    create: async (req, res) => {
        try {
            const { name } = req.body;
            await Genre.create({ name });
            res.redirect('/genres');
        } catch (error) {
            console.error('Erro ao criar gênero:', error);
            res.status(500).send('Erro ao criar gênero.');
        }
    }
};

module.exports = genreController;
