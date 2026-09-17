import { Books } from "../models/Books.model.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";

export const addBook = async (req, res) => {
    try {
        const {
            Title,
            Author,
            Genre,
            Price,
            Description
        } = req.body;

        // Check image
        if (!req.file) {
            return res.status(400).json({
                message: "Book image is required"
            });
        }

        // Upload local image to Cloudinary
        const cloudinaryResponse = await uploadOnCloudinary(
            req.file.path
        );

        // Check Cloudinary upload
        if (!cloudinaryResponse) {
            return res.status(500).json({
                message: "Image upload failed"
            });
        }

        // Save book in MongoDB
        const book = await Books.create({
            Title,
            Author,
            Genre,
            Price,
            Description,
            image: cloudinaryResponse.secure_url
        });

        res.status(201).json({
            message: "Book added successfully",
            book
        });

    } catch (error) {

        console.log("Error adding book:", error);

        res.status(500).json({
            message: "Failed to add book",
            error: error.message
        });
    }
};