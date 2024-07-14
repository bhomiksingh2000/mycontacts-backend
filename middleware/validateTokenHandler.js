const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler (async (err, req, res, next) => {
    let token ;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.startWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            console.log(decoded);
        })
    }
});

module.exports = validateToken;

/*
This middleware checks for a Bearer token in the Authorization header of incoming requests. 
If a valid token is found, it verifies the token using a secret key. If the verification fails, 
it responds with a 401 status and an error message. If it succeeds, 
it logs the decoded token payload. This middleware ensures that only requests with valid JWTs
 can proceed to the next middleware or route handler in the Express application.
*/