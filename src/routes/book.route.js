import express from "express";
import { addBook } from "../controllers/addBook.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { getBook } from "../controllers/getBook.controller.js";
import { updateBook } from "../controllers/updateBook.controller.js";
import { deleteBook } from "../controllers/deleteBook.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/", upload.single("image"), addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;