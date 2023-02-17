const { Sequelize, Op, Model, DataTypes  } = require('sequelize');

const sequelize = new Sequelize('graphql-poc', 'postgres', 'Samsung#123', {
  host: 'localhost',
  dialect:'postgres' 
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.user=require('./user')(sequelize,DataTypes,Model)

db.DataTypes=DataTypes
db.sequelize.sync({force:false})
module.exports=db
