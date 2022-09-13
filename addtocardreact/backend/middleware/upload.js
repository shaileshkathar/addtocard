const multer = require("multer");
const path = require("path");
const fs = require("fs");

!fs.existsSync("public/uploads") &&
  fs.mkdirSync("public/uploads", { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, res, cd) {
    cd(null, "public/uploads");
  },
  filename: function (req, file, cd) {
    const mm = ["image/jpg", "image/png", "image/jpeg"];
    !mm.includes(file.mimetype) && cd(new Error("file not support"));

    const extname = path.extname(file.originalname);
    const fn = Date.now() + extname;
    req.body.image = `uploads/${fn}`;
    cd(null, fn);
  },
});

exports.uploads = multer({ storage: storage });
