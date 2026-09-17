import { Books } from "../models/Books.model.js";

export const deleteBook = async (req, res)=>{
    const {id} = req.params;
    console.log(id);
    try {
        const deletebook = await Books.findByIdAndDelete(id);
    
        if(!deletebook){
            console.log("Book not found");
            return res.status(404).json("Book not found against your id");
        }
        return res.status(200).json("Book deleted successfully");
        
    } catch (error) {
        console.log("error while deleting book", error);
        res.status(500).json({
            message: "error while deleting book",
            error: error.message
        });
    }


}