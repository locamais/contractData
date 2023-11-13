const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.js')

const Contract = sequelize.define('Contract', {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientAdress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientCpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientTel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    prices: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    totalPrices: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    period: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    days: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    delivery: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    date: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    equipment: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    payment: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    workAdress: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

module.exports = Contract