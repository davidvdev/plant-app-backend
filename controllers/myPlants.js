const { Router } = require("express")
const MyPlant = require('../models/myPlant')
const Plant = require('../models/plant')
const { isLoggedIn} = require('./middleware')

const router = Router()

// Index Route with isLoggedIn middleware
router.get("/", isLoggedIn, async (req,res) => {
    try{
        // get username from req.user property create by isLoggedIn middleware
        const { username } = req.user
        // send all myplant with that user
        const myPlants = await MyPlant.find({username}).populate('plantType')
        res.json({
            status: 200,
            data: myPlants
        })
    }catch(err){
        res.status(400).json({err})
    }
})

// Task Arr Due Today
router.get("/wateringdue/:date", isLoggedIn, async(req,res) => {
    try{        
        const { username } = req.user

        // find all myPlants, return an array with plants that need to be watered today
        // if lastWatering + waterFrequency = today's date, add to array
        const myPlants = await MyPlant.find({username}).populate('plantType')
        const today = req.params.date.toLowerCase()

        const dueToday = await myPlants.filter(plant => {
            let taskStr = plant.lastWatering.toString().toLowerCase().split(" ").splice(1,3).toString().replaceAll(",","-")
            let taskArr = taskStr.split("-")
                taskArr[1] = Number(taskArr[1])
            let todayArr = today.split("-")
                todayArr[1] = Number(todayArr[1])


            console.log("taskStr: ", taskStr)
            console.log("taskArr: ", taskArr)
            console.log("today: ", today)
            console.log("todayArr: ", todayArr)

            if (todayArr[0] === taskArr[0]){
                if (todayArr[1] === taskArr[1] + plant.waterFrequency) return plant
            }})

        // const dueToday = await myPlants.map(plant => {
        //         return {
        //             lastWatering : plant.lastWatering.toString().toLowerCase().split(" ").splice(1,3).toString().replaceAll(",","-")
        //         }
        // }).filter(task => today === task.lastWatering)
        res.json ({
            status: 200,
            today: today,
            data: dueToday,
        })

    }catch(err){
        res.status(400).json({err})
    }
})

// Show route with isLoggedIn middleware
router.get("/:id", isLoggedIn, async (req,res) => {
    try{
        const { username } = req.user
        const _id = req.params.id
        const myPlant = await MyPlant.findOne({ username, _id}).populate('plantType')
        res.json({
            status: 200,
            data: myPlant
        })
    }catch(err){
        res.status(400).json({err})
}
})

// Create route with isLoggedIn middleware and selectable Plant
router.post("/", isLoggedIn, async (req,res)=> {
    try{
        const {username} = req.user
        req.body.username = username
        // create a new myplant and send in respnose
        const newPlant = await MyPlant.create(req.body)
        const plantType = await Plant.findById(req.body.plantid)
        const updatedPlant = await MyPlant.findByIdAndUpdate(newPlant._id, {plantType}, {new: true}).populate('plantType')

        res.json({
            status: 200,
            data: updatedPlant
        })
    }catch(err){
        res.status(400).json({err})
    }

   
})

// Update route with isLoggedIn middleware
router.put("/:id", isLoggedIn, async (req,res) => {
    try{
        const {username} = req.user
        req.body.username = username
        const _id = req.params.id
        const updatedPlant = await MyPlant.findByIdAndUpdate({username, _id}, req.body, {new: true}).populate('plantType')
        // update myplant with the same id if it belongs to logged in user
        res.json({
            status: 200,
            data: updatedPlant
        })
    }catch(err){
        res.status(400).json(err)
    }
})

// Destroy route with isLoggedIn middleware
router.delete("/:id", isLoggedIn, async(req,res) => {
    try{
        const { username } = req.user
        const _id = req.params.id
        // remove myplant with the same id if it belongs to logged in user
        res.json(
            await MyPlant.findByIdAndDelete({ username, _id}).catch((error) => 
            res.status(400).json({ error }))
        )
    }catch(err){
        res.status(400).json({err})
    }
})

module.exports = router