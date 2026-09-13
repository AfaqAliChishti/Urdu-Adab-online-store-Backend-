import express from "express";
import { addBook } from "../controllers/addBook.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { getBook } from "../controllers/getBook.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/", upload.single("image"), addBook);

export default router;