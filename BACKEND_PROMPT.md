# 🎭 Prompt untuk Backend Novel Writing Mode Implementation

Copy prompt ini untuk obrolan baru dengan AI assistant:

---

## 📋 Context Prompt

```
Saya butuh bantuan implementasi Novel Writing Mode di backend OpenHands. 

SITUASI SAAT INI:
- Frontend sudah 100% siap dengan Novel Writing Mode
- Frontend mengirim data novel mode ke backend via WebSocket
- Backend belum dimodifikasi untuk handle novel mode
- Saya hanya pakai OpenRouter (bukan OpenAI/Anthropic langsung)

FRONTEND MENGIRIM DATA INI:
```json
{
  "action": "message",
  "args": {
    "content": "Enhanced prompt dari novel service",
    "novel_mode": true,
    "original_prompt": "Input asli user",
    "template_used": "character-development"
  }
}
```

YANG PERLU DIIMPLEMENTASI DI BACKEND:
1. Deteksi novel_mode flag dari frontend
2. System prompt khusus untuk creative writing (dalam bahasa Indonesia)
3. Parameter AI optimal untuk novel writing (temperature: 0.8, max_tokens: 4000)
4. Model selection: Claude 3.5 Haiku untuk budget, Claude 3 Opus untuk premium
5. AI harus bertanya detail dulu sebelum kasih saran (no generic responses)

TECH STACK BACKEND:
- Node.js dengan WebSocket
- OpenRouter API (bukan OpenAI/Anthropic langsung)
- Message handler yang sudah ada

GOAL:
AI jadi novel writing mentor yang:
- Tanya genre, target audience, karakter detail dulu
- Kasih saran spesifik dan actionable
- Pake bahasa Indonesia
- Response lebih panjang dan mendalam untuk creative writing

BUDGET CONSIDERATION:
- User punya budget terbatas ($10-25)
- Perlu optimasi cost dengan model selection
- Claude 3.5 Haiku untuk daily use, Claude 3 Opus untuk complex tasks

Tolong bantu implementasi backend integration untuk Novel Writing Mode ini. Fokus pada:
1. Message handler modification
2. Novel mode detection
3. System prompt untuk creative writing
4. Model selection logic
5. Parameter optimization

Saya akan share kode backend yang relevan setelah ini.
```

---

## 🔧 Follow-up Questions untuk AI

Setelah paste prompt di atas, tanyakan ini:

1. **"Bisa lihat struktur message handler yang ada di backend saya?"**
   - Share file yang handle WebSocket messages

2. **"Bagaimana cara detect novel_mode dari message yang dikirim frontend?"**
   - Minta contoh kode untuk parsing novel mode

3. **"Bisa buatkan system prompt khusus untuk novel writing dalam bahasa Indonesia?"**
   - Prompt yang memaksa AI bertanya detail dulu

4. **"Bagaimana implementasi model selection berdasarkan budget?"**
   - Logic untuk pilih Claude 3.5 Haiku vs Claude 3 Opus

5. **"Bisa buatkan parameter optimization untuk creative writing?"**
   - Temperature, max_tokens, top_p yang optimal

## 📁 Files yang Mungkin Perlu Dishare

Siapkan files ini untuk dishare ke AI:

```bash
# Message handler files
src/handlers/message-handler.js
src/handlers/websocket-handler.js
src/services/ai-service.js

# Configuration files
src/config/ai-config.js
src/config/openrouter-config.js

# Main server file
src/server.js
src/app.js
```

## 🎯 Expected Output dari AI

AI assistant akan memberikan:

1. **Modified message handler** dengan novel mode detection
2. **Novel system prompt** dalam bahasa Indonesia
3. **Model selection logic** berdasarkan budget
4. **Parameter optimization** untuk creative writing
5. **Integration guide** step-by-step

## 💡 Tips untuk Obrolan

1. **Share kode sedikit-sedikit** - jangan dump semua sekaligus
2. **Test setiap perubahan** sebelum lanjut ke step berikutnya
3. **Fokus satu feature** per message
4. **Minta contoh konkret** untuk setiap implementasi

## 🚀 Success Criteria

Backend berhasil jika:
- ✅ Detect novel_mode dari frontend
- ✅ AI bertanya detail sebelum kasih saran
- ✅ Response dalam bahasa Indonesia
- ✅ Model selection berdasarkan budget
- ✅ Parameter optimal untuk creative writing
- ✅ Integration dengan OpenRouter API

---

**Ready to implement Novel Writing Mode backend! 🎭✍️**