const vision = require('@google-cloud/vision');
const path = require('path');
const fs = require('fs');

// Initialize Vision Client
const client = new vision.ImageAnnotatorClient();

exports.detectObjects = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No image uploaded." });
    }

    const imagePath = path.join(__dirname, "..", "uploads", req.file.filename);

    try {
        // Perform object detection
        const [result] = await client.objectLocalization(imagePath);
        const detections = result.localizedObjectAnnotations;

        res.json({ detections });
    } catch (error) {
        console.error("❌ Detection Error:", error.message);
        res.status(500).json({ error: "Object detection failed." });
    }
};
