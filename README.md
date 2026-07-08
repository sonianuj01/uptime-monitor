# 🚀 Uptime Monitor

A full-stack website uptime monitoring application that continuously checks the availability and response time of websites. The application automatically performs health checks every 30 seconds and displays real-time status updates through a clean dashboard.

---

## 📸 Screenshots

> Add screenshots after uploading your project.

### Dashboard

![Dashboard](./screenshots/dashboard.png)

### Add Monitor

![Add Monitor](./screenshots/add-monitor.png)

### Monitor Cards

![Monitor Cards](./screenshots/monitor-list.png)

---

# ✨ Features

- 🌐 Monitor multiple websites
- ⚡ Automatic health checks every 30 seconds
- 📈 Response time tracking
- ✅ UP / DOWN status monitoring
- 🔢 HTTP Status Code tracking
- 🕒 Last checked timestamp
- 🗑️ Delete monitors
- 🔍 Search monitors
- 📱 Responsive UI
- 🔔 Toast notifications
- 🐳 Docker & Docker Compose support

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Hot Toast
- React Icons

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Axios
- Node-Cron

---

## DevOps

- Docker
- Docker Compose

---

# 📂 Project Structure

```
uptime-monitor/
│
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── .env.example
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/uptime-monitor.git

cd uptime-monitor
```

---

## Configure Environment Variables

### Backend

Create

```
backend/.env
```

```env
PORT=5000

MONGODB_URI=mongodb://mongo:27017/uptime-monitor
```

---

### Frontend

Create

```
frontend/.env
```

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 🐳 Run with Docker

Build images

```bash
docker compose build
```

Run project

```bash
docker compose up
```

Or

```bash
docker compose up --build
```

---

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

# 💻 Run Without Docker

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📡 API Endpoints

## Get All Monitors

```
GET /api/monitors
```

---

## Add Monitor

```
POST /api/monitors
```

Body

```json
{
  "url": "https://google.com"
}
```

---

## Delete Monitor

```
DELETE /api/monitors/:id
```

---

## Get Monitor History

```
GET /api/monitors/:id/history
```

---

# 🧠 How It Works

1. User adds a website URL.
2. Website is stored in MongoDB.
3. A scheduled cron job runs every 30 seconds.
4. Backend sends an HTTP request to every registered website.
5. Response time, HTTP status code, and availability are saved.
6. Frontend automatically refreshes the dashboard every 10 seconds.

---

# 🐳 Docker Architecture

```
                Docker Compose
                      │
      ┌───────────────┼───────────────┐
      │               │               │
      ▼               ▼               ▼
 Frontend        Backend          MongoDB
 React/Vite     Express API      Database
      │               │
      └──── HTTP REST API ───────┘
```

---

# 🌱 Environment Variables

## Backend

| Variable | Description |
|----------|-------------|
| PORT | Backend Server Port |
| MONGODB_URI | MongoDB Connection String |

---

## Frontend

| Variable | Description |
|----------|-------------|
| VITE_API_URL | Backend API URL |



