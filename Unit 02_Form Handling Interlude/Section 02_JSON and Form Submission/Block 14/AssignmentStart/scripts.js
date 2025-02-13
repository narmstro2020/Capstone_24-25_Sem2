const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
    fs.writeFile("data.json", JSON.stringify(req.body, null, 2), err => {
        if (err){
            console.error("Error saving file:", err);
        }else{
            res.json({message: "Form submitted and saves successfully"})
        }
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));