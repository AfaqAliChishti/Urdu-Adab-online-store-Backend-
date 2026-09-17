import { Books } from "../models/Books.model.js"

export const getBook = async (req, res)=>{
    try {
        const book = await Books.find();
        console.log(book);
        res.status(200).json(book);
    } catch (error) {
        console.log("error is comming while geting books", error);
    }
}