const express = require("express");
const app = express();
const cors = require("cors");
const { getImages } = require("./util");
const fs = require("fs");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // destination is used to specify the path of the directory in which the files have to be stored
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    // It is the filename that is given to the saved file.
    cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/images"));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `Date: ${new Date()}, Method: ${req.method}, URL:${req.url} \n`,
    (err) => {
      if (err) throw err;
      console.log("log file updated.");
      next();
    }
  );
});

app.get("/", (req, res) => {
  getImages(res);
});

// Create a POST endpoint for '/upload' route
app.post("/upload", upload.single("myFile"), (req, res) => {
  getImages(res);
});

const PORT = 4001;
app.listen(PORT, () => console.log(`server running in ${PORT}`));
