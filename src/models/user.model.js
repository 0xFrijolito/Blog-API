import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema, model } = mongoose;
const userSchema = new Schema({
    "name": {type: String, unique: true},
    "email": {type: String, unique: true},
    "password": {type: String, required: true},
});

// == Auth Helpers =====
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
}

export default model("User", userSchema);
