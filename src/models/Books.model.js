import mongoose, { Schema } from "mongoose";

const booksSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Author:{
        type: String,
        required: true
    },
    Genre:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{timestamps: true})

export const Books = mongoose.model("Books", booksSchema);