import Post from "../models/post.model.js";

// == Getters =====
export const getPosts = async (req, res) => {
    const limit = req.query.limit || 20;
    const posts = await Post.find().sort({"date": -1}).limit(limit);
    res.json(posts);
}

export const getPostsById = async (req, res) => {
    const post = await Post.findById(req.params.postID);
    res.json(post);
}

// == Create =====
export const createPost = async (req, res) => {
    const { title, subtitle, content } = req.body;
    const date = new Date();

    const newPost = new Post({title, subtitle, date, content});
    const postSaved = await newPost.save();

    res.status(201).json(postSaved);
}

// Edit
export const editPost = async (req, res) => {

}

// Delete
export const deletePost = async (req, res) => {

}
