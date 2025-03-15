const axios = require("axios");
const path = require("path");
const fs = require("fs");

exports.detectObjects = async (req, res) => {
    console.log("🟢 [INFO] Request received for object detection");

    if (!req.file) {
        console.error("❌ [ERROR] No image uploaded");
        return res.status(400).json({ error: "No image uploaded. Please select an image." });
    }

    const imagePath = path.join(__dirname, "..", "uploads", req.file.filename);

    if (!fs.existsSync(imagePath)) {
        console.error(`❌ [ERROR] Image file not found: ${imagePath}`);
        return res.status(400).json({ error: "Uploaded image file not found. Please re-upload." });
    }

    console.log(`🟠 [INFO] Image found: ${imagePath}`);

    try {
        const imageBuffer = fs.readFileSync(imagePath);
        const contentType = `image/${path.extname(imagePath).slice(1)}`;  // Auto-detect format

        const response = await axios.post(
            "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
            imageBuffer,
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_KEY}`,
                    "Content-Type": contentType
                }
            }
        );

        console.log("🟢 [SUCCESS] Object detection completed successfully");

        // Ensure the data is structured correctly
        const detections = response.data.map(obj => ({
            label: obj.label || "Unknown",
            score: obj.score || 0
        }));

        res.json({ detections });
    } catch (error) {
        console.error("❌ [ERROR] Detection Failed:", error.response?.data || error.message);

        res.status(500).json({
            error: "Object detection failed.",
            details: error.response?.data || error.message
        });
    }
};
