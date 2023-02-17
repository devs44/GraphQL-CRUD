const {Sequelize,Op,QueryTpes}=require('sequelize')
const config=require('../config/config.json')

const db=require('../models')
const User=db.user

//get all users
const getUsers=async(req,res)=>{
    try{
        const data=await User.findAll({})
        res.status(200).send({success:true,data:data})
    }
    catch(error){
        res.status(400).send({success:false,message:"Error"})
    }
}

//add user
const addUser=async(req,res)=>{
    try{
        const name=req.body.name;
        const email=req.body.email;
        const gender=req.body.gender;
        const status=req.body.status
        const data=await User.create({
            name:name,
            email:email,
            gender:gender,
            status:status
        })
        res.status(200).send({success:true,data:data})
    }
    catch(error){
        res.status(400).send({success:false,message:"Error"})
    }
}

module.exports={
    getUsers,
    addUser
}