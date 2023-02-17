const graphql=require('graphql')
const{
    GraphQLList,
    GraphQLInt
}=graphql
const userType=require('../TypeDefs/userTypeDef')
const db=require('../../models/index')
const User=db.user

module.exports.USER_LIST={
    type:new GraphQLList(userType),
    resolve(parent,args){
        let data=User.findAll()
        return data
    }
}

module.exports.USER_DETAILS={
    type:new GraphQLList(userType),
    args:{
        id:{type:GraphQLInt}
    },
    resolve(parent,args){
        let data=User.findAll({where:{id:args.id}})
        return data
    }
}