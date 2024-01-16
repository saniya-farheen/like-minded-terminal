const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");

router.get('/',(req, res) =>{
    res.send("hello");
});
router.post("/signup",(req, res) =>{
    const {name,username,email,password}=req.body;
    if(!name || !username ||!email|| !password){
        res.status(422).json({ error: "please add all the fields"})
    }
    USER.findOne({$or:[{email:email},{username:username}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"Email or username  is already in use." });
        }
        bcrypt.hash(password, 12).then((hashedPassword)=>{
            const user = new USER({
                name,
                email,
                username,
                password:hashedPassword
            })
            user.save().then(user =>{res.json({messege: "saved successfully"})})
            .catch(err =>{ console.log(err)})
            
        })
        
    })
    
})
module.exports = router;