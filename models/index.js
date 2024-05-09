const Pet = require('./Pet');
const User = require('./User');
const Profile = require('./Profile');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

Profile.belongsTo(Pet, {
  foreignKey: 'pet_id'
});

module.exports = { User, Pet };
