const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    attack:{
      type:DataTypes.FLOAT,
      allowNull:false
    },
    defense:{
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    speed:{
      type:DataTypes.FLOAT,
    },
    height:{
      type:DataTypes.FLOAT,
    },
    weight:{
      type:DataTypes.FLOAT,
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
    
  },{
    timestamps: false, 
  });
};
