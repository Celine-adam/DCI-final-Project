import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/fileController.js";
import { storage } from '../config/cloudstorge.js';

const router = express.Router();

//initialize multer middleware
const upload = multer({ storage: storage });

router.post("/create", upload.single("image"), uploadFile);

export default router;
