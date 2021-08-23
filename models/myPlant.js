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
        },
        "lastWatering": {type: Date, required: true, default: Date.now},
        "waterFrequency": {type: Number, required: true, default: 1},
        "waterAmount": {type: Number, required:true, default: 50},
        "sunlight": {type: String, required: true, default: "partial"},
        "temperature": {type: Number, required: true, default: 70}

    }, {timestamps: true}
)

const MyPlant = model("MyPlant", myPlantSchema)

module.exports = MyPlant