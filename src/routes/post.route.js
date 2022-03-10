import { Router } from "express";
import * as postController from "../controllers/post.controller.js";

const router = Router();

// Getters
router.get("/", postController.getPosts);
router.get("/:postID", postController.getPostsById);

// Create
router.post("/", postController.createPost);

// Edit
router.put("/", postController.editPost);

// Delete
router.delete("/", postController.deletePost);

export default router;
