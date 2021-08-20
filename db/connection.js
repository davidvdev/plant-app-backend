require('dotenv').config()
const mongoose = require('mongoose')

const {MONGODB_URI} = process.env
const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect(MONGODB_URI, config)

mongoose.connection
    .on("open", () => console.log("connected to mongo"))
    .on("closed", () => console.log("disconnected from mongo"))
    .on("error", (err) => console.log("error: ", err))

module.exports = mongoose