import mongoose from "mongoose";
import app from "./app.js";

( async () => {
    try {
       await mongoose.connect("mongodb://localhost:27017/gitsetup")
       console.log("DB Connected")

       const onListening = () => {
        console.log("Listening on port 5000")
       }

       app.listen(5000, onListening)
    }catch (err) {
        console.error("error: ", err)
    }
})()