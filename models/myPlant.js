const mongoose = require('mongoose')
const {Schema, model} = mongoose

// insert a default picture for all plants

const myPlantSchema = new Schema(
    {
        "username": {type: String, required: true},
        "plantType" : {type: String}
    }
)

const MyPlant = model("MyPlant", myPlantSchema)

module.exports = MyPlant