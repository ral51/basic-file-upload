const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

app.use(fileUpload());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/formSubmit", function(req, res) {
  if (!req.files) {
    console.log("No files were uploaded.");
    return res.status(400).send("No files were uploaded.");
  }

  console.log(req);

  var sampleFile = req.files.sampleFile;

  sampleFile.mv("/tmp/file.png", function(err) {
    console.log("File uploaded.");
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
});

app.listen(8000);
