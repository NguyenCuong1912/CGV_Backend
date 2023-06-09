const multer = require("multer");
const mkdirp = require("mkdirp");
const UploadImage = (nameFolder, multi = false) => {
  const made = mkdirp.sync(`./app/public/images/${nameFolder}`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./app/public/images/${nameFolder}`);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      console.log("fileCheck", file);
      const extensionImageList = [".jpg", ".png", ".mp3"];
      const extension = file.originalname.slice(-4);
      const check = extensionImageList.includes(extension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("file không hợp lệ"));
      }
    },
  });
  if (multi) {
    return upload.array(nameFolder, 4);
  } else {
    return upload.single(nameFolder);
  }
};

module.exports = {
  UploadImage,
};
