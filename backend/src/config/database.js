const mongoose=require("mongoose");

const connectToDb= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("Database connected")
        });
    } catch (error) {
        console.log(`Cannot connect to database ${error}`);
    }
}

module.exports=connectToDb;