# OpenHands Frontend - Deployment Guide

Frontend aplikasi OpenHands yang menyediakan interface web untuk AI assistant dengan dukungan berbagai LLM providers.

## Deployment di Vercel

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maxwin66/OpenHands-Frontend)

### Manual Deployment

1. **Fork repository ini**
2. **Import ke Vercel:**
   - Buka [Vercel Dashboard](https://vercel.com/dashboard)
   - Klik "New Project"
   - Import repository Anda

3. **Set Environment Variables di Vercel:**
   ```
   VITE_BACKEND_HOST=your-backend-domain.onrender.com
   VITE_USE_TLS=true
   VITE_MOCK_API=false
   VITE_FRONTEND_PORT=3001
   ```

4. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

5. **Deploy:**
   - Vercel akan otomatis build dan deploy
   - Domain akan tersedia di `https://your-project.vercel.app`

## Local Development

### Prerequisites
- Node.js 20.x atau lebih baru
- npm, yarn, atau package manager lainnya

### Installation

```bash
# Clone repository
git clone https://github.com/maxwin66/OpenHands-Frontend.git
cd OpenHands-Frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables
Edit file `.env` dengan konfigurasi Anda:

```bash
# Backend Configuration
VITE_BACKEND_HOST=localhost:3000
VITE_USE_TLS=false

# For production, gunakan backend URL Anda:
# VITE_BACKEND_HOST=your-backend-domain.onrender.com
# VITE_USE_TLS=true
```

## Koneksi dengan Backend

Frontend ini dirancang untuk terhubung dengan backend OpenHands yang di-deploy di Render. Pastikan:

1. Backend sudah di-deploy di Render
2. Environment variable `VITE_BACKEND_HOST` diset ke URL backend Anda
3. CORS sudah dikonfigurasi di backend untuk menerima request dari domain frontend

## Fitur Utama

- Real-time chat dengan AI assistant
- File explorer dan editor
- Terminal interface
- WebSocket connection untuk real-time updates
- Responsive design
- Internationalization support

## Troubleshooting

### WebSocket Connection Issues
Jika ada masalah koneksi WebSocket:
1. Pastikan backend mendukung WebSocket
2. Periksa environment variable `VITE_BACKEND_HOST`
3. Pastikan tidak ada firewall yang memblokir koneksi

### CORS Issues
Jika ada error CORS:
1. Pastikan backend dikonfigurasi dengan CORS yang benar
2. Set `CORS_ALLOWED_ORIGINS` di backend ke domain frontend Anda

### Build Issues
Jika build gagal:
1. Pastikan semua dependencies ter-install
2. Periksa Node.js version (minimal 20.x)
3. Clear cache: `npm run clean` atau `rm -rf node_modules package-lock.json && npm install`

## Support

Untuk bantuan lebih lanjut, silakan buat issue di repository ini atau hubungi maintainer.