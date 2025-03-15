const tf = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const path = require("path");
const fs = require("fs");

exports.detectObjects = async (req, res) => {
    if (!req.file) {
        console.error("❌ Error: No image uploaded.");
        return res.status(400).json({ error: "No image uploaded." });
    }

    const imagePath = path.join(__dirname, "..", "uploads", req.file.filename);

    try {
        // Load the COCO-SSD model
        const model = await cocoSsd.load();

        // Read the uploaded image as a Tensor
        const imageBuffer = fs.readFileSync(imagePath);
        const decodedImage = tf.node.decodeImage(imageBuffer);

        // Perform object detection
        const predictions = await model.detect(decodedImage);

        res.json({ detections: predictions });
    } catch (error) {
        console.error("❌ Object Detection Error:", error);
        res.status(500).json({ error: "Object detection failed." });
    }
};
