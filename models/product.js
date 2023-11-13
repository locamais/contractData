const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.js')

const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dayPrice: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    weekPrice: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    fortnightPrice: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    monthPrice: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
  })

// sequelize.sync({force:true})

module.exports = Product