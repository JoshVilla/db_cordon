import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

// Connect to MongoDB
const connect = async () => {
    try {
        await mongoose.createConnection(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Database");
    } catch (err) {
        console.error("Connection to Database Failed:", err);
        process.exit(1);
    }
};

export default connect;