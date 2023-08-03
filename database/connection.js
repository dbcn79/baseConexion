const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`${process.env.BASEDATOS}`, `${process.env.USER}`, `${process.env.PASSWORD}`, {
    host: `${process.env.SERVER}`,
    dialect: `${process.env.TIPO_BASE_DE_DATOS}`
});

module.exports = { sequelize }