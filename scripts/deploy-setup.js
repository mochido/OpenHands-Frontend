#!/usr/bin/env node

/**
 * Script untuk setup deployment OpenHands Frontend
 * Membantu user mengkonfigurasi environment variables untuk deployment
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('🚀 OpenHands Frontend Deployment Setup\n');
  
  console.log('Panduan ini akan membantu Anda mengkonfigurasi environment variables untuk deployment.\n');
  
  // Collect backend information
  const backendHost = await question('Masukkan URL backend Anda (contoh: your-app.onrender.com): ');
  const useTLS = await question('Apakah backend menggunakan HTTPS? (y/n): ');
  const mockAPI = await question('Apakah ingin menggunakan mock API untuk development? (y/n): ');
  
  // Create environment configuration
  const envConfig = {
    VITE_BACKEND_HOST: backendHost || 'localhost:3000',
    VITE_USE_TLS: useTLS.toLowerCase() === 'y' ? 'true' : 'false',
    VITE_MOCK_API: mockAPI.toLowerCase() === 'y' ? 'true' : 'false',
    VITE_FRONTEND_PORT: '3001',
    VITE_INSECURE_SKIP_VERIFY: 'false'
  };
  
  // Generate .env file
  const envContent = Object.entries(envConfig)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  
  const envPath = path.join(process.cwd(), '.env');
  fs.writeFileSync(envPath, envContent);
  
  console.log('\n✅ File .env berhasil dibuat!');
  console.log('\nKonfigurasi:');
  Object.entries(envConfig).forEach(([key, value]) => {
    console.log(`  ${key}=${value}`);
  });
  
  console.log('\n📋 Langkah selanjutnya:');
  console.log('1. Untuk deployment di Vercel:');
  console.log('   - Import repository ke Vercel');
  console.log('   - Set environment variables di Vercel dashboard');
  console.log('   - Deploy!');
  
  console.log('\n2. Untuk development lokal:');
  console.log('   - npm install');
  console.log('   - npm run dev');
  
  console.log('\n3. Untuk production build:');
  console.log('   - npm run build');
  console.log('   - npm start');
  
  console.log('\n🔗 Useful Links:');
  console.log('   - Vercel Dashboard: https://vercel.com/dashboard');
  console.log('   - Deployment Guide: ./README-DEPLOYMENT.md');
  
  rl.close();
}

main().catch(console.error);