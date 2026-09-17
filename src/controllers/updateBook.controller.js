import { Books } from "../models/Books.model.js";

export const updateBook = async (req,res)=>{
    const {id} = req.params;
    console.log("The id of book you want to update is",id);

    try {
        const UpdateBook = await Books.findByIdAndUpdate(
            id,
            {
                Title: req.body?.Title,
                Author: req.body?.Author,
                Genre: req.body?.Genre,
                Price: req.body?.Price,
                Description: req.body?.Description,
            },
            {new: true}
        )
        
        if(!UpdateBook){
            return res.status(404).json("Book not found");
        }
        return res.status(200).json(UpdateBook);
    } catch (error) {
        console.log("error while updating book", error);
        res.status(500).json({
            message: "error while updateing book", 
            error: error.message
    });
    }
    };