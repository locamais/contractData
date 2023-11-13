const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.js')

const Client = sequelize.define('Client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    tel: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    status: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  })


module.exports = Client