const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('activity', {
ID:{type:DataTypes.UUID,primaryKey: true,defaultValue:DataTypes.UUIDV4},
name:{type: DataTypes.STRING,allowNull: false},
dificulty:{type: DataTypes.INTEGER,allowNull: false,validate:{max:5,min:1}},
duration:{type: DataTypes.TIME,allowNull: false},
season:{type: DataTypes.ENUM("Verano","Otoño","Invierno","Primavera")}
},{timestamps:false})
};