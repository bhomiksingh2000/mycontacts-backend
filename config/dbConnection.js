/*
The mongoose library is used to interact with MongoDB, providing a schema-based solution
 for modeling your application data. 
 
 The connectDb function is a helper function to 
 establish a connection to the MongoDB database using Mongoose.
*/

const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected", connect.connection.host, connect.connection.name);
    }

    catch(err){
        console.log(err);
        process.exit(1);
    }

};

module.exports = connectDb;