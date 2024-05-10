const Pet = require('./Pet');
const User = require('./User');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Pet };
