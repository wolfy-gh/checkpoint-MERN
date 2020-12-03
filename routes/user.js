const express = require("express")
const router= express.Router()

//IMPORT THE USER MODEL
const userModel = require("../models/User")



//testing
router.get("/test",(req,res)=>{
    res.send("testing")
})
//@Method :POST 
//@desc : add a new user
//@path : http://localhost:5000/api/user
//@params :body
router.post("/",async(req,res)=>{
    try {
        const newUser = new userModel({...req.body})
        const response = await newUser.save()
        res.send({response:response,message:"user added successfully"})
    } catch (error) {
        res.send({message:"there is an error adding a new user"})
    }
})

//@Method :GET 
//@desc : get all users
//@path : http://localhost:5000/api/user
//@params :body
router.get("/",async(req,res)=>{
    try {
        const response =await userModel.find()
        res.send({response:response,message:"all users are displayed"})
    } catch (error) {
        res.send({message:"there is an error displaying all users"})
    }
})

//@Method :GET 
//@desc : get a user by id
//@path : http://localhost:5000/api/user/:id
//@params : id
router.get("/:id",async(req,res)=>{
    try {
        const response =await userModel.findById({_id:req.params.id})
        res.send({response:response,message:"the user with this id is displayed"})
    } catch (error) {
        res.send({message:"there is an error displaying a user with this id"})
    }
})

//@Method :DELETE 
//@desc : delete a user by id 
//@path : http://localhost:5000/api/user/:id
//@params :id
router.delete("/:id",async(req,res)=>{
    try {
        const response =await userModel.deleteOne({_id:req.params.id})
        if(response.n==0){
            res.send({message:"the user is already deleted"})
            return
        }
        res.send({response:response,message:"the user with this id is deleted"})
    } catch (error) {
        res.send({message:"there is an error deleting a user with this id"})
    }
})

//@Method :PUT 
//@desc : update a user by id
//@path : http://localhost:5000/api/user/:id
//@params : id,body
router.put("/:id",async(req,res)=>{
    try {
        const response =await userModel.updateOne({_id:req.params.id},{$set:{...req.body}})
        if(response.nModified ==0){
            res.send({message:"the user is already updated"})
            return
        }
        res.send({response:response,message:"the user with this id is updated"})
    } catch (error) {
        res.send({message:"there is an error updating a user with this id"})
    }
})


module.exports=router
