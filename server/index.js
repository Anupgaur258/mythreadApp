const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

// Test Route
app.get("/api/test", (req, res) => {
    res.send("API working");
});

// Start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on PORT : ${port}`);
});