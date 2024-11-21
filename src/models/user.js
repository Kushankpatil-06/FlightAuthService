'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
const{SALT} = require('../config/serverConfig')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    email:
      {type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
          isEmail:true
          }
  },
    password:{type: DataTypes.STRING,
    validate:{
      len:[2,10]
    }}
  }, {
    sequelize,
    modelName: 'User',
  });

  user.beforeCreate((user) => {
    console.log(user);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  });
  return user;
};