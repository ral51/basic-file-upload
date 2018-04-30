const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
// default options
app.use(fileUpload());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
app.post('/upload', function(req, res) {
  if (!req.files) {
    console.log("No files were uploaded.");
    return res.status(400).send('No files were uploaded.');
  }
  
  console.log(req);

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  var sampleFile = req.files.file;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/tmp/file.png', function(err) {
    console.log("File uploaded.");
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

app.listen(8000);