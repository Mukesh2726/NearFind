const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve frontend

let reminders = [];

// Add Reminder API
app.post("/add-reminder", (req, res) => {
    const { task, time } = req.body;
    reminders.push({ task, time });
    res.json({ message: "Reminder added successfully!" });
});

// Get Reminders API
app.get("/reminders", (req, res) => {
    res.json(reminders);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});