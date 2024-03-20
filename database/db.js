
import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
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