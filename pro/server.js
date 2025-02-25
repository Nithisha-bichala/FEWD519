const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let userData = {}; // Store user data temporarily

// Route to render the form page
app.get("/", (req, res) => {
    res.render("index");
});

// Handle form submission
app.post("/submit", (req, res) => {
    userData.name = req.body.name;
    userData.rollno = req.body.rollno;
    
    res.redirect("/formsubmission");
});

// Route to render the submission page with user data
app.get("/formsubmission", (req, res) => {
    res.render("formsubmission", { user: userData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
