import asynHandler from 'express-async-handler';
import generateToken from '../common/generateToken.js';
import User from '../models/userModels.js';

//@desc Auth user  get token
//@route POST /api/users/login
//@access Public

export const authUser = asynHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

//@desc Register a new user
//@route POST /api/users
//@access Public

export const registerUser = asynHandler(async(req, res) => {
    const { name, email, password } = req.body;
    const userEsists = await User.findOne({ email });
    if (userEsists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name,
        email,
        password,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
});