const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

app.use(express.static("public"));

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.json({ message: "File uploaded successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
