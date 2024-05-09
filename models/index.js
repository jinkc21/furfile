const Pet = require('./Project');
const User = require('./user');
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
