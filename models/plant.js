const mongoose = require('../db/connection')
const {Schema, model} = mongoose

// insert a default picture for all plants

const plantSchema = new Schema(
    {
        "type": {type: String, required:true},
        "botName": String,
        "otherNames": Array,
        "description": {type: String, default:""},
        "picture": {type: String, required:false},
        "waterFrequency":{type: Number, default:1},
        "uses": {type: String, default:""},
        "propagation": {type: String, default:""},
        "soil": {type: String, default:""},
        "climate": {type: String, default:""},
        "health": {type: String, default:""}
    }
)

const Plant = model("Plant", plantSchema)

module.exports = Plant