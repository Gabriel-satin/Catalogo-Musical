module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
      title: DataTypes.STRING,
      release_year: DataTypes.INTEGER,
      cover_image_url: DataTypes.STRING
  }, { timestamps: true });

  Album.associate = (models) => {
      Album.belongsTo(models.Artist, { foreignKey: 'artist_id' });
      Album.belongsTo(models.Genre, { foreignKey: 'genre_id' });
  };

  return Album;
};
