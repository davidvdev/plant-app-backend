const mongoose = require('mongoose')
const {Schema, model} = mongoose

// insert a default picture for all plants

const plantSchema = new Schema(
    {
        "type": {type: String, require:true},
        "botName": String,
        "otherNames": Array,
        "description": {type: String, require:true},
        "picture": {type: String, require:false}
    }
)

const Plant = model("Plant", plantSchema)

module.exports = Plant