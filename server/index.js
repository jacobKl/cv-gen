const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const formidable = require("formidable");

app.use(express.static("static"))
app.use(cors());

app.post("/upload", (req,res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = __dirname + "/static/uploads";
    form.parse(req, function (err, fields, files) {
        fs.rename(files.avatar.path, form.uploadDir + "/" + files.avatar.name, () => {})
        res.end( JSON.stringify({name: files.avatar.name}) );
      });
})

app.listen(5000, () => {
    console.log("Server running")
})