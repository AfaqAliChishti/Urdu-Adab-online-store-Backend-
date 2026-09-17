# Urdu Adab - Backend

This is the backend API for **Urdu Adab**, a community-based book platform where users can discover, buy, borrow, and exchange books.

The backend is built with Node.js, Express, MongoDB, Mongoose, Multer, and Cloudinary.

---

## 🚀 Features

- RESTful API
- MongoDB database integration
- Mongoose models
- Book management
- Add books
- Fetch books
- Image upload using Multer
- Cloudinary image storage
- Temporary local image storage
- CORS support
- Environment variable configuration
- Error handling
- Modular project structure

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Multer**
- **Cloudinary**
- **CORS**
- **dotenv**
- **JavaScript (ES Modules)**

---

## 📁 Project Structure

```text
Urdu Adab Backend/
│
├── public/
│   └── uploads/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   │   └── book.controller.js
│   │
│   ├── middleware/
│   │   └── multer.middleware.js
│   │
│   ├── models/
│   │   └── Books.js
│   │
│   ├── routes/
│   │   └── book.route.js
│   │
│   └── utils/
│       └── uploadOnCloudinary.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
