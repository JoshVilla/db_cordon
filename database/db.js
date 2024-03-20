const mongoose = require("mongoose")

const MONGODB_URL = process.env

exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then()
    .catch((err) => {
        console.log("Connection to Database Failed")
        process.exit(1)
    })
}