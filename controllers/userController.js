const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a user
//@route POST/api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fields are mandatory!");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user already registered");
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password : ", hashedPassword);
    
    // now creating a new user
    const user = await User.create({
        username, 
        email, 
        password: hashedPassword,

    });
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    } else{
        res.status(400);
        throw new Error("User Data is not valid");
    }

});


//@desc Login user
//@route POST/api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ email });
    console.log('User found:', user);

    // Comparing the password used by the user to login with the hashed password stored in DB
    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);

        if (isMatch) {
            const accessToken = jwt.sign(
                {
                    user: {
                        username: user.username,
                        email: user.email,
                        id: user.id,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "10m" }
            );
            return res.status(200).json({ accessToken });
        }
    }

    res.status(401);
    throw new Error("Email or password is not valid");
});



//@desc Current user info 
//@route GET/api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {

    res.json(req.user);
});

module.exports = { 
    registerUser, 
    loginUser, 
    currentUser};