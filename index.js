// import express from "express";
// import cors from "cors";

// const app = express();

// app.use(cors());

// app.get("/",(req, res)=>{
//     res.send("Urdu Adab Backend is running perfectly");
// });

// const port = 3000;

// app.listen(port, ()=>{
//     console.log(`Your project is running on port http://localhost:${port}`)
// });

// import dotenv from "dotenv";
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import { upload } from "./src/middleware/multer.middleware.js";
import router from "./src/routes/book.route.js";
import { getBook } from "./src/controllers/getBook.controller.js";

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());
connectDB();


// Home route

app.use("/api/books", router);



app.listen(port, () =>{
    console.log(`Backend running at http://localhost:${port}`)
});