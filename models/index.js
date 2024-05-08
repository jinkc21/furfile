const Pet = require('./Project');
const User = require('./user');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Pet };
