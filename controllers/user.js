require("dotenv").config()
const {Router} = require("express")
const User = require('../models/user')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = Router()

const { SECRET = "secret"} = process.env

router.post("/signup", async(req, res) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const user = await User.create(req.body)
        res.json({
            status: 200,
            data: user
        })
    }catch(err){
        res.status(400).json({err})
    }
})

router.post("/login", async(req,res) => {
    try{
        // check if user exists
        const user = await User.findOne({username: req.body.username})
        if (user){
            // check for matching password
            const result = await bcrypt.compare(req.body.password, user.password)
            if(result) {
                // sign token and send it in response
                const token = await jwt.sign({username: user.username}, SECRET)
                res.json({token})
            } else {
                res.status(400).json({error:"password doesn't match"})
            }
        }else {
            res.status(400).json({ error: "User doesn't exist"})
        }
    }catch(err){
        res.status(400).json({err})
    }
})

module.exports = router