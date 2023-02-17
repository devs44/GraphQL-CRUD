const db=require('../../models/index')
const user=db.user

const {GraphQLList,GraphQLInt,GraphQLString}=require('graphql')
const userType=require('../TypeDefs/userTypeDef')
const statusType=require('../TypeDefs/statusType')


module.exports.userAdd={
    type:userType,
    args:{
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLInt}
    },
    resolve:async(parent,args)=>{
        await user.create({
            name:args.name,
            email:args.email,
            gender:args.gender
        })
        return args
    }
}

module.exports.userUpdate={
    type:statusType,
    args:{
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLInt}
    },
    resolve:async(parent,args)=>{
        await user.update({
            name:args.name,
            email:args.email,
            gender:args.gender
        },{
            where:{
                id:args.id
            }
        })
        return {
            success:true,message:"Updated successfully",error:''
        }
    }
}

module.exports.DELETE_USER={
    type:statusType,
    args:{
        id:{type:GraphQLInt}
    },
    resolve:async(parent,args)=>{
        await user.destroy({
            where:{
                id:args.id
            }
        })
        return {
            success:true,message:"Deleted successfully",error:''
        }
    }
}