const express = require("express");
const router = express.Router();
const multer = require("multer");
const { detectObjects } = require("../controllers/deepaiController");

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post("/image", upload.single("image"), detectObjects);

module.exports = router;
