const sequelize=require('sequelize')
const graphql=require('graphql')
const{
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
}=graphql



const {USER_LIST,USER_DETAILS}=require('./Queries/user')
const {userAdd,userUpdate,DELETE_USER}=require('./Mutations/user')

const RootQuery = new GraphQLObjectType({
    name:'devi',
    fields:{
        userList:USER_LIST,
        userDetail:USER_DETAILS
    }
})

const Mutation=new GraphQLObjectType({
    name:'mutation',
    fields:{
        createUser:userAdd,
        userUpdate:userUpdate,
        deleteUser:DELETE_USER
    }
})

module.exports=new GraphQLSchema({query:RootQuery,mutation:Mutation})