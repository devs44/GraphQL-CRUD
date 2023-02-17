const {Sequelize,DataTypes,Model}=require('sequelize')
module.exports=(sequelize,DataTypes,Model)=>{
    

  const User = sequelize.define('Users', {
      
      name: {
        type: DataTypes.STRING
     
      },
      email:{
        type: DataTypes.STRING
      },
      gender:{
        type:DataTypes.STRING,
      },
      status:{
        type:DataTypes.STRING
      }
    }, 
    {
      sequelize,
      modelName:'Users'
    });
    return User;
}