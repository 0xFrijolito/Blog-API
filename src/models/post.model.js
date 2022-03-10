import mongoose from "mongoose";

const { Schema, model } = mongoose;
const postSchema = new Schema ({
    title: String,
    subtitle: String,
    date: Date,
    author: String,
    tags: Array,
    content: String
});

export default model("Post", postSchema)
