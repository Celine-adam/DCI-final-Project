import express from "express";
import {
  createPost,
  deletePostById,
  ListPost,
  OwnerListPost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/owner/list", OwnerListPost),
  router.delete("/owner/delete/:id", deletePostById),
  router.post("/owner/create", createPost),
  router.get("/user/list", ListPost);
router.patch("/owner/update/:id");

export default router;
