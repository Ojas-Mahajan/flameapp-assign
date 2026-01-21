# Real-Time Collaborative Drawing Canvas

A browser-based collaborative whiteboard where multiple users can draw together in real-time with brush/eraser tools, undo/redo, and multi-user color indicators.

---

## 🌐 Live Demo (Deployed)

🔗 **Try it here:** https://flameapp-assign-e5t8.vercel.app/

*(Open in multiple tabs to test real-time collaboration!)*

---

## 🚀 Features

- ✏️ Freehand drawing with smoothing
- 🧽 Eraser tool
- 🎨 Color picker & brush size control
- ✨ Assigned user colors
- 👥 Live multi-user cursor tracking
- ↩️ Global undo & redo
- ⏱ Real-time networking via WebSockets
- 🔄 Consistent history replay for late joins

---

## 🛠️ Setup Instructions

### Installation

#### 1. Clone repo

```bash
git clone https://github.com/Ojas-Mahajan/flameapp-assign.git
cd flameapp-assign
```

#### 2. Install dependencies

**Backend:**

```bash
cd server
npm install
npm start
```

**Frontend:**

```bash
cd ../client
npm install
npm start
```

#### 3. Access App

Open `http://localhost:5173` in multiple browser tabs/windows.

---

## 🧪 Testing Guide

### Local Testing:
- Open multiple browser windows/tabs (or incognito)
- Start drawing to see peer sync

### Network Testing:
- Find local IP via `ipconfig` / `ifconfig`
- Update WebSocket URL in client to local IP
- Test from phones/laptops on same WiFi

### Test Scenarios:
✔ Color + Line width changes  
✔ Eraser mode  
✔ Undo/Redo (global)  
✔ Cursor tracking  
✔ 3+ simultaneous users  

---

## 🐛 Known Limitations

1. Initial sync for large drawings can lag
2. Touch events less smooth on mobile
3. High latency networks cause cursor delay
4. Rapid global undo operations may desync history
5. Safari has minor inconsistency vs Chrome/Firefox

---

## ⏱ Development Timeline

**Total Time Invested:** ~12 hours

Breakdown:
- Canvas APIs — 2.5h
- WebSockets Integration — 2h
- Tools & UI — 2h
- Undo/Redo System — 3.5h
- Documentation — 1h
- Debug & Polish — 1h

---

## 📚 Tech Stack

**Frontend:**
- React (CRA)
- HTML5 Canvas API
- Socket.io-client

**Backend:**
- Node.js
- Express.js
- Socket.io
- In-memory stroke history

---

## 📖 Documentation

See `ARCHITECTURE.md` for detailed technical documentation.

---

## 👤 Author

**Ojas Mahajan**  
🔗 GitHub: https://github.com/Ojas-Mahajan  
📧 Contact available upon request


