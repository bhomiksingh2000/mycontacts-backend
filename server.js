const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();       // for reading the .env file

connectDb();  // for connecting to MONGO DB Cluster
const app = express(); // Create an instance of express

// port defined in .env file     (just like environment var in springboot)
const port = process.env.PORT || 5000;     

/*
used to set up middleware that parses incoming requests with JSON payloads. 
This middleware is part of the built-in body-parsing capabilities provided by Express.js, 
which makes it easier to handle JSON data sent in HTTP request bodies.
*/
app.use(express.json());


/* 
for routing all api requests (this is basically a middleware)
When a request is made to a URL that starts with /api/contacts, 
Express will pass control to the router middleware defined in the contactRoutes.js file.
The router will then handle the specific sub-paths and HTTP methods 
(like GET, POST, PUT, DELETE) defined within it.
*/
app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/users", require("./routes/userRoutes"));


// creating a middleware for errorHandler 
app.use(errorHandler)
/*
In an Express.js application, when you throw an error inside a route handler 
(like in your createContact function), the error is passed to the next middleware function
 in the stack. If an error-handling middleware is defined, Express will recognize the error
and pass it to that error-handling middleware. This mechanism is built into the Express framework.
*/


app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})