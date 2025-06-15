# 🔧 Environment Setup untuk Novel Writing Mode

## 📁 Frontend Environment (.env)

Copy dan paste ini ke file `.env` di root folder frontend:

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

# Analytics (optional)
# VITE_POSTHOG_KEY=your_posthog_key
# VITE_GOOGLE_ANALYTICS_ID=your_ga_id

# Novel Writing Mode Configuration (optional)
VITE_NOVEL_MODE_ENABLED=true
VITE_DEFAULT_NOVEL_MODEL=claude-3-5-haiku-20241022
```

## 🖥️ Backend Environment (.env)

Copy dan paste ini ke file `.env` di root folder backend:

```bash
# Backend Environment Variables

# Server Configuration
PORT=3000
HOST=0.0.0.0
NODE_ENV=development

# OpenRouter Configuration (untuk semua AI models)
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

# Database (jika diperlukan)
# DATABASE_URL=your_database_url_here

# Security
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:3001

# Logging
LOG_LEVEL=info

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Upload (jika diperlukan)
MAX_FILE_SIZE=10485760
UPLOAD_DIR=./uploads

# Session Configuration
SESSION_SECRET=your_session_secret_here
SESSION_MAX_AGE=86400000

# WebSocket Configuration
WS_HEARTBEAT_INTERVAL=30000
WS_HEARTBEAT_TIMEOUT=60000
```

## 🚀 Quick Setup Commands

### Frontend Setup:
```bash
cd your-frontend-folder
cp .env.example .env
# Edit .env dengan values di atas
npm install
npm run dev
```

### Backend Setup:
```bash
cd your-backend-folder
# Buat file .env dengan content di atas
npm install
npm run dev
```

## 🔑 API Keys yang Diperlukan

### 1. OpenRouter API Key
- Daftar di: https://openrouter.ai/
- Buat API key di dashboard
- Copy ke `OPENROUTER_API_KEY`

### 2. Optional Keys
- PostHog (analytics): https://posthog.com/
- Google Analytics: https://analytics.google.com/

## 💡 Tips Environment

### Development:
```bash
NODE_ENV=development
VITE_BACKEND_HOST=localhost:3000
VITE_USE_TLS=false
```

### Production:
```bash
NODE_ENV=production
VITE_BACKEND_HOST=your-domain.com
VITE_USE_TLS=true
```

### Testing:
```bash
NODE_ENV=test
VITE_MOCK_API=true
```

## 🔒 Security Notes

1. **Jangan commit file .env** ke git
2. **Gunakan .env.example** untuk template
3. **Rotate API keys** secara berkala
4. **Gunakan strong secrets** untuk JWT dan session

## 🎯 Novel Mode Specific

Environment variables khusus untuk Novel Writing Mode:

```bash
# Frontend
VITE_NOVEL_MODE_ENABLED=true
VITE_DEFAULT_NOVEL_MODEL=claude-3-5-haiku-20241022

# Backend
NOVEL_MODE_ENABLED=true
NOVEL_DEFAULT_MODEL=anthropic/claude-3-5-haiku-20241022
NOVEL_TEMPERATURE=0.8
NOVEL_MAX_TOKENS=4000
```

## 🐛 Troubleshooting

### CORS Issues:
```bash
CORS_ORIGIN=http://localhost:3001
```

### WebSocket Issues:
```bash
WS_HEARTBEAT_INTERVAL=30000
WS_HEARTBEAT_TIMEOUT=60000
```

### Rate Limiting Issues:
```bash
RATE_LIMIT_MAX_REQUESTS=1000  # Increase if needed
```