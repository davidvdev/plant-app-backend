const mongoose = require('../db/connection')
const {Schema, model} = mongoose

// insert a default picture for all plants

const myPlantSchema = new Schema(
    {
        "nickname": String,
        "username": {type: String, required: true},
        "plantType" : {
            ref: 'Plant',
            type: mongoose.Schema.Types.ObjectId
        }
    }
)

const MyPlant = model("MyPlant", myPlantSchema)

module.exports = MyPlant