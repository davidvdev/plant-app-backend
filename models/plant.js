const mongoose = require('../db/connection')
const {Schema, model} = mongoose

// insert a default picture for all plants

const plantSchema = new Schema(
    {
        "type": {type: String, required:true},
        "botName": String,
        "otherNames": Array,
        "description": {type: String, required:true, default:""},
        "picture": {type: String, required:false},
        "waterFrequency":{type: Number, default:1},
        "uses": {type: String, required: true, default:""},
        "propagation": {type: String, required: true, default:""},
        "soil": {type: String, required: true, default:""},
        "climate": {type: String, required: true, default:""},
        "health": {type: String, required: true, default:""}
    }
)

const Plant = model("Plant", plantSchema)

module.exports = Plant