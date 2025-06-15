# 🔑 Ready-to-Copy Environment Files

## 📁 Frontend .env (Copy ke root folder frontend)

```bash
# Frontend Environment Variables

# Backend Configuration
VITE_BACKEND_HOST=localhost:3000
VITE_USE_TLS=false
VITE_FRONTEND_PORT=3001
VITE_INSECURE_SKIP_VERIFY=false

# API Configuration
VITE_MOCK_API=false
VITE_MOCK_SAAS=false

# Novel Writing Mode Configuration
VITE_NOVEL_MODE_ENABLED=true
VITE_DEFAULT_NOVEL_MODEL=claude-3-5-haiku-20241022

# Analytics (optional - uncomment jika diperlukan)
# VITE_POSTHOG_KEY=your_posthog_key
# VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

## 🖥️ Backend .env (Copy ke root folder backend)

```bash
# Backend Environment Variables

# Server Configuration
PORT=3000
HOST=0.0.0.0
NODE_ENV=development

# OpenRouter Configuration (GANTI dengan API key Anda)
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1

# Novel Writing Mode Configuration
NOVEL_MODE_ENABLED=true
NOVEL_DEFAULT_MODEL=anthropic/claude-3-5-haiku-20241022
NOVEL_PREMIUM_MODEL=anthropic/claude-3-opus-20240229
NOVEL_BALANCED_MODEL=anthropic/claude-3-5-sonnet-20241022

# AI Model Parameters for Novel Mode
NOVEL_TEMPERATURE=0.8
NOVEL_MAX_TOKENS=4000
NOVEL_TOP_P=0.9

# Security Keys (SUDAH DIGENERATE - SIAP PAKAI)
JWT_SECRET=2112424ecb7afd4c690069780190f6a28ebfa755b96f41b4e0841041327c4e45dc9e365cc1325f289746a5b4b1bf23a0332f6aad9af9ed1f8a0ea290ffbde685
SESSION_SECRET=72d810c22e6efbe8e030472deaf3601675713f0c290ebc31f332c30f380330165b58984025de4d38bab15f2dd5d9084fb7b968f368aaeaa5d3dfbac949e2ea17

# CORS Configuration
CORS_ORIGIN=http://localhost:3001

# Logging
LOG_LEVEL=info

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# WebSocket Configuration
WS_HEARTBEAT_INTERVAL=30000
WS_HEARTBEAT_TIMEOUT=60000

# File Upload (jika diperlukan)
MAX_FILE_SIZE=10485760
UPLOAD_DIR=./uploads

# Session Configuration
SESSION_MAX_AGE=86400000

# Database (uncomment jika pakai database)
# DATABASE_URL=your_database_url_here
```

## 🔧 Alternative Shorter Secrets (Jika mau yang lebih pendek)

Jika mau ganti dengan yang lebih pendek, replace JWT_SECRET dan SESSION_SECRET dengan:

```bash
# Shorter versions (32 bytes)
JWT_SECRET=95b57a171adb007ca14178829b53a63a3c5799125df0506128f94185be0c5fb7
SESSION_SECRET=ebdad625a52dc8f750326e1113933dcde2e5c529df2de01be1dff17d6f7125da
```

## 🚀 Quick Setup Commands

### 1. Frontend Setup:
```bash
cd your-frontend-folder
# Copy frontend .env content di atas ke file .env
npm install
npm run dev
```

### 2. Backend Setup:
```bash
cd your-backend-folder
# Copy backend .env content di atas ke file .env
# JANGAN LUPA ganti OPENROUTER_API_KEY dengan API key asli Anda!
npm install
npm run dev
```

## ⚠️ IMPORTANT NOTES

### 🔑 Yang HARUS Diganti:
1. **OPENROUTER_API_KEY** - Ganti dengan API key asli dari OpenRouter
2. **CORS_ORIGIN** - Sesuaikan dengan domain frontend Anda (production)

### 🔒 Security:
- **JWT_SECRET** dan **SESSION_SECRET** sudah digenerate random - SIAP PAKAI
- **JANGAN commit** file .env ke git
- **Simpan backup** secrets di tempat aman

### 🌐 Production:
Untuk production, ganti:
```bash
# Frontend
VITE_BACKEND_HOST=your-backend-domain.com
VITE_USE_TLS=true

# Backend
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
```

## 📋 Checklist Setup

- [ ] Copy frontend .env
- [ ] Copy backend .env  
- [ ] Ganti OPENROUTER_API_KEY dengan API key asli
- [ ] Test frontend: `npm run dev`
- [ ] Test backend: `npm run dev`
- [ ] Test Novel Writing Mode toggle
- [ ] Verify WebSocket connection

**Ready to go! 🎭✍️**