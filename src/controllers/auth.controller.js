import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/user.model.js"

export const logIn = async (req, res) => {
    const {email, password} = req.body;

    const userFound = User.findOne({email});
    if (!userFound) {
        res.status(401).json("Invalid Credentials");
    }

    if (!User.comparePassword(password, userFound.password)) {
        res.status(401).json("Invalid Credentials");
    }

    const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET, {expiresIn: 846000});
    res.status(200).json({token});
}

export const signIn = async (req, res) => {
    const {name, email, password, roles} = req.body;

    const newUser = new User({
        name, email,
        password: await User.encryptPassword(password)
    });
    const userSaved = await newUser.save();

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: 84600});

    res.status(201).json({token});
}

export const updateUser = async (req, res) => {
    const {userID} = req.body;
}

export const deleteUser = async (req, res) => {
    const {userID} = req.body;
    await User.findByIdAndDelete(userID);
    res.status(204).json({"message": "user delete sucessfuly"})
}
