const express = require('express');
const app = express();
const sequelize = require('./database/db'); // Caminho para o arquivo de configuração do Sequelize

const Album = require('./models/album');
const Artist = require('./models/artists');
const Genre = require('./models/genre');
const albumRoutes = require('./routes/albumRoutes'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/albums', albumRoutes);

// Sincronizar as tabelas com o banco de dados
sequelize.sync({ force: true })  // Use { force: true } apenas no início, para recriar as tabelas
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

// Roteamento e outras configurações
app.get('/', (req, res) => {
  res.render('index'); // Renderiza a página inicial com o EJS
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});



