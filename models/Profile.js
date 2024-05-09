const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pet',
        key: 'id',
      },
    },
    altered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    microchip: {        
        type: DataTypes.STRING,
    },
    vaccinations: {        
        type: DataTypes.STRING,
    },
    allergies: {        
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Profile',
  }
);

module.exports = Profile;
