// const Plant = require('../models/plant')
const {Router} = require('express')
const Plant = require('../models/plant')
const router = Router()
// const seedData = require('../db/plants.json')

// seed

// index
router.get("/", async(req,res) => {
    try{
        const plants = await Plant.find({})
        res.json({
            status: 200,
            data: plants
        })
    }catch (err){
        res.status(400).json(err)
    }
})

// show

// create

// update

// destroy

module.exports = router