require('dotenv').config()
const express = require('express')
const mongoose = require('./db/connection')

const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

const {PORT=7777} = process.env

// ROUTERS GO HERE
const plantsRouter = require('./controllers/plants')
const userRouter = require('./controllers/user')
const myPlantsRouter = require('./controllers/myPlants')

app.get("/", (req,res) => res.send("hello world!"))
app.use("/plants", plantsRouter)
app.use("/user", userRouter)
app.use("/myplants", myPlantsRouter)

app.listen(PORT, () => console.log(`server listening on ${PORT}`))