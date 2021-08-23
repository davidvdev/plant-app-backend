const { Router } = require("express")
const MyPlant = require('../models/myPlant')
const Plant = require('../models/plant')
const { isLoggedIn} = require('./middleware')

const router = Router()

// Index Route with isLoggedIn middleware
router.get("/", isLoggedIn, async (req,res) => {
    // get username from req.user property create by isLoggedIn middleware
    const { username } = req.user
    // send all myplant with that user
    res.json(
        await MyPlant.find({username}).catch((error) =>
        res.status(400).json({error}))
    )
})

// Show route with isLoggedIn middleware
router.get("/:id", isLoggedIn, async (req,res) => {
    const { username } = req.user
    const _id = req.params.id
    res.json(
        await MyPlant.findOne({ username, _id}).catch((error) => 
        res.status(400).json({ error }))
    )
})

// Create route with isLoggedIn middleware
router.post("/", isLoggedIn, async (req,res)=> {
    const {username} = req.user
    req.body.username = username
    // create a new myplant and send in respnose
    res.json(
        await MyPlant.create(req.body).catch((error) =>
        res.status(400).json({ error }))
    )
})

// Create route with isLoggedIn middleware and selectable Plant
router.post("/plantid/", isLoggedIn, async (req,res)=> {
    const {username} = req.user
    req.body.username = username
    // create a new myplant and send in respnose
    const newPlant = await MyPlant.create(req.body)
    const plantType = await Plant.findById(req.body.plantid)

    res.json({
        newPlant: newPlant,
        plantType: plantType
    })

   
})

// Update route with isLoggedIn middleware
router.put("/:id", isLoggedIn, async (req,res) => {
    const {username} = req.user
    req.body.username = username
    const _id = req.params.id
    // update myplant with the same id if it belongs to logged in user
    res.json(
        await MyPlant.updateOne({username, _id}, req.body, {new: true}).catch(
            (error) => res.status(400).json({ error })
        )
    )
})

// Destroy route with isLoggedIn middleware
router.delete("/:id", isLoggedIn, async(req,res) => {
    const { username } = req.user
    const _id = req.params.id
    // remove myplant with the same id if it belongs to logged in user
    res.json(
        await MyPlant.remove({ username, _id}).catch((error) => 
        res.status(400).json({ error }))
    )
})

module.exports = router