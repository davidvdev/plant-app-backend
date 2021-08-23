require("dotenv").config()
const jwt = require('jsonwebtoken')

// MIDDLEWARE FOR AUTHORIZATION
const isLoggedIn = async (req,res,next) => {
    try{
        // check if auth header exists
        if (req.headers.authorization){
            // parse token from header
            const token = req.headers.authorization.split(" ")[1]
            if (token) {
                const payload = await jwt.verify(token, process.env.SECRET)
                if (payload) {
                    // store the user data in request object
                    req.user = payload
                    next()
                } else {
                    res.status(400).json({ error: "token verification failed"})
                }
            } else {
                res.status(400).json({error: "malformed auth header"})
            }
        } else {
            res.status(400).json({error: "No authorization header"})
        }
    }catch(err){
        res.status(400).json({err})
    }
}

module.exports = {
    isLoggedIn
}