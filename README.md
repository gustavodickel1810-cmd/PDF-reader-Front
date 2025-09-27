# 📚 Multi-Language PDF Reader Setup Guide

## 🚨 CORS Issue Fix

You're getting the "Failed to fetch" error because you're opening `index.html` directly in the browser (`file://`). This blocks CORS requests for security reasons.

## 🛠️ Quick Setup (Choose One Method)

### Method 1: Python Server (Easiest)
```bash
# Navigate to your project folder
cd /Users/lakshitkhurana/Desktop/pdf

# Start a simple web server
python -m http.server 8080

# Open browser and go to:
# http://localhost:8080
```

### Method 2: Node.js http-server
```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to your project folder
cd /Users/lakshitkhurana/Desktop/pdf

# Start server
http-server -p 8080

# Open browser and go to:
# http://localhost:8080
```

### Method 3: VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. It will open automatically at `http://127.0.0.1:5500`

### Method 4: Custom Node.js Server
Save this as `frontend-server.js` in your project folder:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const frontendPort = 8080;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the frontend server
app.listen(frontendPort, () => {
    console.log(`🌐 Frontend server running at http://localhost:${frontendPort}`);
    console.log(`📱 Open your browser and go to: http://localhost:${frontendPort}`);
});
```

Then run:
```bash
node frontend-server.js
```

## 🎯 Complete Setup Process

### Step 1: Start Backend Server
```bash
cd /Users/lakshitkhurana/Desktop/pdf
node server.js
```
✅ Should show: "🚀 Enhanced PDF Reader Backend is running on http://localhost:3000"

### Step 2: Start Frontend Server (pick one method above)
```bash
python -m http.server 8080
```
✅ Should show: "Serving HTTP on 0.0.0.0 port 8080"

### Step 3: Open Browser
Go to: `http://localhost:8080`

✅ You should see:
- "✅ Backend server is running" in the header
- No CORS errors
- Voice test should work!

## 📁 Project Structure
```
pdf/
├── index.html          # Main HTML file (the enhanced version)
├── server.js           # Backend server (TTS API proxy)
├── frontend-server.js  # Optional: Custom frontend server
└── package.json        # Node.js dependencies
```

## 🔧 Troubleshooting

### Problem: "Failed to fetch" error
**Solution:** You're opening `file://` directly. Use a web server instead.

### Problem: "Backend server offline"
**Solution:** Start your backend server with `node server.js`

### Problem: CORS errors
**Solution:** Serve from `http://localhost` not `file://`

### Problem: Port already in use
**Solution:** Try different ports:
- Frontend: `python -m http.server 8081`
- Backend: Change `port = 3001` in server.js

## 🚀 Final Result

Once both servers are running:
1. **Frontend:** `http://localhost:8080` (your HTML)
2. **Backend:** `http://localhost:3000` (TTS API)
3. **Status:** Both green checkmarks in header
4. **Features:** Voice test works, audio caching works, offline reading works!

## 💡 Pro Tips

- **Bookmark:** `http://localhost:8080` for easy access
- **Development:** Use VS Code Live Server for auto-reload
- **Production:** Consider deploying to Netlify/Vercel (frontend) + Railway/Heroku (backend)

## 📱 Mobile Testing

To test on your phone:
1. Find your computer's IP address: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Start servers as above
3. On phone, go to: `http://[YOUR-IP]:8080`
   - Example: `http://192.168.1.100:8080`

That's it! Your PDF reader will work perfectly with proper CORS handling! 🎉

server.js const express = require('express');
const path = require('path');

const app = express();
const frontendPort = 8080;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the frontend server
app.listen(frontendPort, () => {
    console.log(`🌐 Frontend server running at http://localhost:${frontendPort}`);
    console.log(`📱 Open your browser and go to: http://localhost:${frontendPort}`);
    console.log(`📄 Make sure your index.html file is in the same folder as this server.js file`);
    console.log(`🔌 Backend should be running on http://localhost:3000`);
});

package.json 

{
  "name": "multi-language-pdf-reader",
  "version": "1.0.0",
  "description": "Enhanced PDF reader with premium TTS voices for English and Portuguese, featuring audio caching and offline reading capabilities",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "frontend": "python -m http.server 8080",
    "frontend-node": "node frontend-server.js",
    "both": "concurrently \"npm run start\" \"npm run frontend\"",
    "install-global": "npm install -g http-server nodemon concurrently"
  },
  "keywords": [
    "pdf-reader",
    "text-to-speech",
    "tts",
    "multilingual",
    "offline-reading",
    "audio-caching",
    "english",
    "portuguese",
    "accessibility"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "express-rate-limit": "^7.1.5",
    "node-fetch": "^2.6.7",
    "form-data": "^4.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.2",
    "concurrently": "^8.2.2"
  },
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/multi-language-pdf-reader.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/multi-language-pdf-reader/issues"
  },
  "homepage": "https://github.com/yourusername/multi-language-pdf-reader#readme"
}