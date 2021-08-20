const {Router} = require('express')
const Plant = require('../models/plant')
const router = Router()
const fetch = require('node-fetch')
// const seedData = require('../db/plants.json')

// seed
router.get("/seed", async(req,res) => {
    try{
        // clears out entire collection
        await Plant.deleteMany({})
        // calls the tropical fruits and veggie api for 101 plants
        const url = "http://tropicalfruitandveg.com/api/tfvjsonapi.php"
        const seedData = await (await fetch(url + "?search=a")).json()
        // transform the seedData so it aligns with the model
        const formattedData = await seedData.results.map(item => {
            // let rObj = {}
            // rObj[item.tfvname] = "name"
            // rObj[item.botname] = "botName"
            // rObj[item.othname] = "otherNames"
            return (
            {
                type : item.tfvname,
                botName: item.botname,
                otherNames: item.othname.split(", ")
            })
        })
        console.log('formattedData: ',formattedData)
        await Plant.insertMany(formattedData)
        res.json({
            status: 200,
            data: formattedData
        })

    }catch(err){
        res.status(400).json(err)
    }
})

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