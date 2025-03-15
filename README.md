## Object Detection App

This is a simple Object Detection application built using Node.js, Express, and the Hugging Face API. The app allows users to upload images and detect objects within them using a pre-trained model from Hugging Face.

## Features

- Upload images for object detection.
- Display detected objects along with confidence scores.
- Easy integration with Hugging Face API.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/priyanshu2552/ObjectDetection.git
   cd object-detection-app
Install dependencies:

bash
Copy
npm install
Set up environment variables:

Create a .env file in the root directory and add your Hugging Face API token:

plaintext
Copy
HUGGING_FACE_API_KEY=your_api_key_here
Run the application:

bash
Copy
npm start
The app will be running on http://localhost:3000.

Usage
Access the application:

Open your web browser and navigate to http://localhost:3000.

Upload an image:

Click on "Choose File" to select an image from your device.

Click "Upload & Detect" to process the image.

View results:

The detected objects along with their confidence scores will be displayed on the page.

Example Results
Image 1: ![pexels-photo-1108099](https://github.com/user-attachments/assets/bce0e323-9517-4d67-a9a1-96018688c45c)
Dog
Detected Objects:

dog | Confidence: 99.90%

dog | Confidence: 99.84%

Image 2: Traffic Scene![Sample-image-for-object-detection-day](https://github.com/user-attachments/assets/1e2fb2bd-ce25-4f12-bfc4-c92cc11bd44d)

Detected Objects:

car | Confidence: 94.90%

car | Confidence: 58.44%

truck | Confidence: 69.29%

car | Confidence: 97.26%

car | Confidence: 97.94%

car | Confidence: 60.23%

car | Confidence: 85.59%

truck | Confidence: 87.53%

person | Confidence: 58.80%

car | Confidence: 68.45%

car | Confidence: 99.31%

car | Confidence: 99.66%

car | Confidence: 95.97%

car | Confidence: 72.50%

truck | Confidence: 60.20%

person | Confidence: 52.38%

car | Confidence: 87.76%

person | Confidence: 63.26%

car | Confidence: 98.33%

car | Confidence: 71.51%

car | Confidence: 99.89%

car | Confidence: 95.82%

person | Confidence: 61.84%

bus | Confidence: 73.66%

car | Confidence: 99.82%

car | Confidence: 86.51%

car | Confidence: 96.49%

car | Confidence: 68.68%

API Endpoints
POST /upload: Upload an image for object detection.

Technologies Used
Node.js: JavaScript runtime for building the server.

Express: Web framework for Node.js.

Hugging Face API: Pre-trained models for object detection.
