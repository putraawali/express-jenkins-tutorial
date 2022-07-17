require("dotenv").config()
const express = require("express");
const PORT = process.env.PORT
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({ message: "OK" });
});

app.listen(PORT, () => console.log("Server running on port", PORT))