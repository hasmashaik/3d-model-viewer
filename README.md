# 3D Model Viewer with AR Support

A complete React application for viewing 3D models with AR (Augmented Reality) support and QR code generation.

## Features

- 🎨 **3D Model Viewer**: Load and display .glb files with 360° rotation
- 🤖 **AR Support**: View models in augmented reality on mobile devices
- 📱 **QR Code Generation**: Share the AR view with QR codes
- 🎯 **Interactive Controls**: Orbit controls for rotation, zoom, and pan
- ✨ **Realistic Rendering**: Environment maps and lighting for professional look
- 📱 **Responsive Design**: Works perfectly on desktop and mobile

## Tech Stack

- React + Vite
- Three.js + @react-three/fiber + @react-three/drei
- Tailwind CSS
- @google/model-viewer
- qrcode.react

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 3d-model-viewer
Install dependencies:

bash
npm install
Add your model file:

Place your .glb file in the public folder

Rename it to model.glb or update the path in components

Start the development server:

bash
npm run dev
Usage
Viewing the Model
Rotate: Click and drag the model

Zoom: Scroll up/down

Pan: Right-click and drag

AR View
Click "View in AR" button

On mobile, tap the AR button to activate

Supports Android Scene Viewer and iOS Quick Look

QR Code
Scan the QR code with your phone's camera

Opens the AR view directly on your device

Deployment (Render)
Push your code to GitHub

Go to Render.com and sign up/login

Click "New +" and select "Web Service"

Connect your GitHub repository

Configure:

Name: 3d-model-viewer

Environment: Node

Build Command: npm install && npm run build

Publish Directory: dist

Click "Create Web Service"

Your app will be deployed at https://your-app.onrender.com

Environment Variables
Create a .env file in the root directory:

Project Structure
text
3d-model-viewer/
├── public/
│   └── model.glb
├── src/
│   ├── components/
│   │   ├── ModelViewer.jsx
│   │   ├── QRCodeGenerator.jsx
│   │   ├── ARViewer.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ARPage.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md