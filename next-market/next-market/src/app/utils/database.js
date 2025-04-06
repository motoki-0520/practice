import mongoose from "mongoose"

const connectDB = async() => {}
    try{
        await mongoose.connect("mongodb+srv://castle:Motoki0520@cluster0.jbzar.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch{
        console.log("Failure: Unconnectedt to MongoDB")
        throw new Error()
    }

export default connectDB