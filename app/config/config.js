const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/CGV"
const connectDB = async (runServer) => {
    try {
        return await mongoose.connect(url)
            .then(() => console.log("connected"))
            .catch((err) => { console.log("unconnected") })
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    connectDB
}