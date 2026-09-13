import cloudinary from "../config/cloudinary.js";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        });
        console.log(response)
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log("error is comming from cloudinary", error)
    }
    return null;

}
export {uploadOnCloudinary}