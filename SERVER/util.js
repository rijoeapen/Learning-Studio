const fs = require("fs");
const path = require("path");

const getImages = (res) => {
  fs.readdir(path.join(__dirname, "public/images"), (err, files) => {
    if (err) {
      res.status(401).json("error occured");
    }
    res.status(200).json(files);
  });
};

module.exports = { getImages };
