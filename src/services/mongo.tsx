import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log("Connected to database");
} ).catch((e) => {
    console.log("Error connecting to database", e);
} );

const db = mongoose.connection;

if (!db){
    console.log("Error connecting to database");
}


export default db;