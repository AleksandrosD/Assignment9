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
    title:{
      type: DataTypes.STRING,
      validate: {
        titleMinLength(value) {
          if (value && value.length < 3) {
            throw new Error('Title too short!');
          }
        }
      }
    },
    description:{
      type: DataTypes.TEXT,
      validate: {
        descriptionMaxLength(value) {
          if (value && value.length > 500) {
            throw new Error('Description too long!');
          }
        }
      }},
    ingredients:{type: DataTypes.TEXT,
      validate: {
        ingredientsMaxLength(value) {
          if (value && value.length > 1000) {
            throw new Error('Ingridients too long!');
          }
        }
      }},
    instructions:{type: DataTypes.TEXT,
      validate: {
        instructionsMaxLength(value) {
          if (value && value.length > 5000) {
            throw new Error('Instructions too long!');
          }
        }
      }},
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