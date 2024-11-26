const sequelize = require('./database/db');
const Album = require('./models/album'); // Certifique-se de que o caminho esteja correto
const Artist = require('./models/artista');
const Genre = require('./models/genre');

sequelize.sync({ force: true }) // Configurar { force: false } após a primeira execução
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso!');
        process.exit();
    })
    .catch(error => console.error('Erro ao sincronizar tabelas:', error));
