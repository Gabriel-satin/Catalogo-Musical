module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
      name: DataTypes.STRING,
      genre: DataTypes.STRING
  }, { timestamps: true });

  Artist.associate = (models) => {
      Artist.hasMany(models.Album, { foreignKey: 'artist_id' });
  };

  return Artist;
};
