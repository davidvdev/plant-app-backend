const {Router} = require('express')
const Plant = require('../models/plant')
const router = Router()
const fetch = require('node-fetch')

// seed
router.get("/seed", async(req,res) => {
    try{
        // clears out entire collection
        await Plant.deleteMany({})
        // calls the tropical fruits and veggie api for 101 plants
        const url = "http://tropicalfruitandveg.com/api/tfvjsonapi.php"
        const search = "?search=a"
        const seedData = await (await fetch(url + search)).json()
        // transform the seedData so it aligns with the model
        const formattedData = await seedData.results.map(item => {
           
            return (
            {
                type : item.tfvname,
                botName: item.botname,
                otherNames: item.othname.split(", "),
            })
        })
        await Plant.insertMany(formattedData)
        res.json({
            status: 200,
            data: formattedData
        })

    }catch(err){
        res.status(400).json(err)
    }
})
// seed details
router.put("/seed-details", async(req,res) => {
    try{
        const plants = await Plant.find({})
        const updates = await plants.map(async(plant)  => {
            const url = "http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem="
            const searchTerm = await plant.type.replaceAll(" ","%20")
            const data = await fetch(url + searchTerm)
            const jsondata = await data.json()
            const formattedData = await jsondata.results.map(item => {
           
                return (
                {
                    picture : item.imageurl,
                    uses: item.uses,
                    propagation: item.propagation,
                    soil : item.soil,
                    climate : item.climate,
                    health : item.health
                })
            })
            const updated = await Plant.findByIdAndUpdate(plant._id, ...formattedData, {new:true})
            return updated
        })   
        const data = await Promise.all(updates)
        res.json({
            status: 200,
            data
        })
        
        
    }catch(err){
        res.status(400).json({err})
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
router.get("/:id", async(req,res) => {
    try{
        const plant = await Plant.findById(req.params.id)
        res.json({
            status: 200,
            data: plant
        })
    }catch(err){
        res.status(400).json(err)
    }
})

// create
router.post("/", async(req,res) => {
    try{
        const newPlant = await Plant.create(req.body)
        res.json({
            status: 200,
            data: newPlant
        })
    }catch(err){
        res.status(400).json(err)
    }
})

// update
router.put("/:id", async(req,res) => {
    try{
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json({
            status: 200,
            data: updatedPlant
        })
    }catch(err){
        res.status(400).json(err)
    }
})

// destroy
router.delete("/:id", async(req,res) => {
    try{
        const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
        res.json({
            status: 200,
            data: deletedPlant
        })
    }catch(err){
        res.status(400).json(err)
    }
})


module.exports = router