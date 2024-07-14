const express = require("express");

const router = express.Router();

const { 
    registerUser, 
    loginUser, 
    currentUser } = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

// Export the router
module.exports = router;

