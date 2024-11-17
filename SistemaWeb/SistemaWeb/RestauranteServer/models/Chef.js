const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Chef = sequelize.define('Chef', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  speciality: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  hireDate: {
    type: DataTypes.DATE, 
    allowNull: false,
    defaultValue: DataTypes.NOW, 
  },
  isActive: {
    type: DataTypes.BOOLEAN, 
    defaultValue: true,
  },
  restaurantId: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
  profilePictureUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2), 
    allowNull: true,
    defaultValue: 0.00,
    validate: {
      min: 0,
      max: 5,
    },
  },
}, {
  timestamps: true,
});

module.exports = Chef;
