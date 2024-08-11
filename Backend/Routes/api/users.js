const express = require('express')
const User = require('../../model/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const session = require('express-session')

router.post('/signup',async(req,res) => {
    const { fullname, email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({fullname, email, password: hashedPassword})
        await user.save();
        res.status(201).json({message:"User Signup successfully"})
    }catch(error){
       res.status(400).json({message:"error.message"})
       console.log(error)
    }
}) 

router.post('/login',async(req,res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email })
        if(user && await bcrypt.compare(password, user.password)){
            const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
            //  req.session.user_id = user._id;
            res.json({ token });
        }else{
            res.status(401).json({message:"Invalid Credential"})
        }
    }catch(error){
        res.status(400).json({message:"error.message"})
        console.log(error)
    }
})


module.exports = router
