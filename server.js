const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/submit", (req, res) => {

    const message = req.body.message;

    console.log("Received:", message);

    res.json({
        success: true
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running");
});