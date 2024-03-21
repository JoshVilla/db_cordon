import mongoose from "mongoose";
const { CORDON_DB_URI } = process.env;
// Connect to MongoDB
const connect = async (cb) => {
    try {
        await mongoose.createConnection(CORDON_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to Database")
    } catch (err) {
        console.error("Connection to Database Failed:", err);
        process.exit(1);
    }
};

export default connect;