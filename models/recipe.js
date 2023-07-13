'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt'},
      
    updatedAt:{
      type:DataTypes.DATE,
      field: 'updatedAt',}
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    underscored: true
  });
  return Recipe;
};