const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('catalogo', 'postgres', '271296', {
    host: 'localhost',
    dialect: 'postgres',  
    port: 5432,
});

sequelize.authenticate()
    .then(() => console.log('Conexão com PostgreSQL bem-sucedida!'))
    .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));

module.exports = sequelize;
