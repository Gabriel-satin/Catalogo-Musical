module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
      name: DataTypes.STRING
  }, { timestamps: true });

  Genre.associate = (models) => {
      Genre.hasMany(models.Album, { foreignKey: 'genre_id' });
  };

  return Genre;
};
