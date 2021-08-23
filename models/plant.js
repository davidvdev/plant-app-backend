const mongoose = require('../db/connection')
const {Schema, model} = mongoose

// insert a default picture for all plants

const plantSchema = new Schema(
    {
        "type": {type: String, required:true},
        "botName": String,
        "otherNames": Array,
        "description": {type: String, required:true, default:""},
        "picture": {type: String, required:false}
    }
)

const Plant = model("Plant", plantSchema)

module.exports = Plant