const jsw=require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
router.get('/', (req, res) => {
    res.send(`Hello world from the server router.js`);
});
router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name||!email||!phone||!work||!password||!cpassword){
        return res.status(422).json({error:"Please fill details properly"});
    }
    try{
        const userExist= await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"User already exists"});

        }else if(password!=cpassword){
            return res.status(422).json({message:"Passwords not matching"});
        }else{
            const user=new User({name,email,phone,work,password,cpassword});
            await user.save();
            res.status(201).json({message:"user registered successfully"})
            
        }
        
    }
   catch(err){
        console.log(err);

    }

});
 
//login route
router.post('/signin',async(req,res)=>{
    
    try{
        let token;
        const { email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"Please fill details"});
        }
        const userLogin =await User.findOne({email:email});
        //console.log(userLogin);
        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);
             token = await userLogin.generateAuthToken();
            console.log(token);
            


            if(!isMatch){
                res.status(400).json({error:"Invalid credientials pass"});
                //res.json({message:"Invalid detials pass"});
            }else{
                res.json({message:"user sigin successfully"});
            }
        }else{
            res.status(400).json({error:"Invalid credientials"});
        }
         
    }catch(err){
        console.log(err); 
    }
});


router.get('/about',(req,res)=>{
    console.log("hello my about");
    res.send('hello about from server');
});
//logout logic
router.get('/logout',(req,res)=>{
    console.log('Hello my logout page');
    res.clearCookie('jwttoken',{path:'/'});
    res.status(200).send('User logout');
});

module.exports=router;