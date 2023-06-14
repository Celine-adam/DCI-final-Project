import express from "express";
import {
  createComment,
  deleteCommentById,
  ListComment,
  OwnerListComment,
  rating,
} from "../controllers/commentController.js";
const router = express.Router();
router.get("/owner/comment/list", OwnerListComment),
  router.delete("/owner/comment/:id", deleteCommentById),
  router.post("/user/comment/create", createComment),
  router.get("/user/comment/list", ListComment),
  router.get("user/comment/rating", rating);
export default router;
