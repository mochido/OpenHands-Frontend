# 📚 Novel Writing Mode - Complete Guide

## 🎯 Overview

Novel Writing Mode adalah fitur khusus yang mengoptimalkan OpenHands untuk creative writing. AI akan bertindak sebagai mentor novel profesional yang:

- **Bertanya detail dulu** sebelum memberikan saran
- **Memberikan guidance yang spesifik** dan actionable
- **Membantu mengembangkan cerita** yang compelling
- **Menggunakan AI model terbaik** untuk creative writing

## 🚀 Cara Menggunakan

### 1. **Aktifkan Novel Mode**
- Toggle switch "Novel Writing" di chat interface
- AI akan otomatis menggunakan system prompt khusus novel
- Quick Start panel akan muncul untuk memulai

### 2. **Quick Start Options**
- **Mulai Cerita Baru** - Brainstorming ide cerita
- **Kembangkan Karakter** - Character development
- **Perbaiki Dialog** - Dialog writing tips
- **Bangun Dunia Cerita** - World building
- **Tulis Adegan Romance** - Romance writing
- **Atasi Writer's Block** - Overcome creative blocks

### 3. **Advanced Templates**
- **Character Development** - Psikologi karakter mendalam
- **Plot Structure** - Three-act structure dan pacing
- **Dialogue Writing** - Natural conversation
- **World Building** - Immersive settings
- **Romance Writing** - Chemistry dan tension
- **Professional Editor** - Feedback dan revision

## 🤖 AI Configuration

### **Recommended Models (Best to Good)**

1. **Claude 3 Opus** ⭐⭐⭐⭐⭐
   - Model: `anthropic/claude-3-opus-20240229`
   - **Best for:** Long-form creative writing
   - **Cost:** ~$15/1M input tokens, $75/1M output
   - **Perfect for:** Complex character development, literary quality

2. **Claude 3.5 Sonnet** ⭐⭐⭐⭐
   - Model: `anthropic/claude-3-5-sonnet-20241022`
   - **Best for:** Balance quality & cost
   - **Cost:** ~$3/1M input tokens, $15/1M output
   - **Perfect for:** Most novel writing tasks

3. **Claude 3.5 Haiku** ⭐⭐⭐
   - Model: `anthropic/claude-3-5-haiku-20241022`
   - **Best for:** Budget-friendly option
   - **Cost:** ~$0.25/1M input tokens, $1.25/1M output
   - **Perfect for:** $10 budget dengan banyak interaksi

### **AI Behavior in Novel Mode**

```
🎭 KEAHLIAN UTAMA:
- Character development dan psikologi karakter
- Plot structure dan narrative pacing  
- Dialogue writing dan character voice
- World building dan setting creation

🎯 PENDEKATAN:
1. SELALU BERTANYA DETAIL DULU
   - "Genre apa yang Anda targetkan?"
   - "Siapa target reader Anda?"
   - "Apa konflik utama yang ingin Anda explore?"

2. BERIKAN GUIDANCE YANG SPESIFIK
   - Contoh konkret dan actionable
   - Multiple options untuk dipilih
   - Step-by-step guidance

3. JAGA KUALITAS CERITA
   - Prioritaskan storytelling quality
   - Emotional resonance
   - Literary merit
```

## 💡 Smart Features

### **1. Intelligent Prompt Enhancement**
- Deteksi prompt yang terlalu vague
- Auto-enhance dengan context novel writing
- Guidance untuk pertanyaan yang lebih baik

### **2. Template Suggestions**
- AI otomatis suggest template berdasarkan input
- Smart detection untuk character, plot, dialogue, dll
- One-click template application

### **3. Model Optimization**
- Auto-detect model yang tidak optimal untuk novel
- Suggestion untuk upgrade ke model yang lebih baik
- Cost vs quality recommendations

## 📝 Example Workflows

### **Workflow 1: Mulai Novel Baru**
```
1. Aktifkan Novel Mode
2. Klik "Quick Start" → "Mulai Cerita Baru"
3. AI akan bertanya:
   - Genre yang diinginkan
   - Target audience
   - Tema atau konflik utama
   - Setting preference
4. Berdasarkan jawaban, AI akan suggest:
   - Character archetypes
   - Plot structure
   - World building elements
```

### **Workflow 2: Character Development**
```
1. Pilih template "Character Development"
2. AI akan guide melalui:
   - Basic character info
   - Psychological profile
   - Backstory development
   - Character arc planning
   - Relationship dynamics
3. Output: Detailed character sheet
```

### **Workflow 3: Improve Existing Writing**
```
1. Pilih template "Professional Editor"
2. Paste existing text
3. AI akan analyze:
   - Plot consistency
   - Character voice
   - Dialogue effectiveness
   - Pacing issues
   - Show vs tell balance
4. Output: Detailed feedback + suggestions
```

## 🎨 Best Practices

### **For Users (Pacar Anda)**
1. **Be Specific** - Semakin detail pertanyaan, semakin baik saran AI
2. **Answer Questions** - AI akan bertanya detail, jawab sejujur mungkin
3. **Use Templates** - Template dirancang untuk hasil optimal
4. **Iterate** - Jangan ragu untuk ask follow-up questions
5. **Save Good Prompts** - Copy prompt yang menghasilkan output bagus

### **For Developers**
1. **Model Selection** - Claude models work best for creative writing
2. **System Prompts** - Novel mode uses specialized prompts
3. **Context Management** - Longer context for character consistency
4. **Temperature Settings** - Higher creativity (0.8) for novel mode

## 🔧 Technical Implementation

### **Files Modified/Added:**
```
src/components/features/novel-writing/
├── novel-mode-toggle.tsx       # Mode switcher
├── novel-templates.tsx         # Template library
└── novel-quick-start.tsx       # Quick start options

src/services/
└── novel-service.ts            # AI config & prompt enhancement

src/components/features/chat/
├── interactive-chat-box.tsx    # Main integration
└── chat-input.tsx              # Placeholder support
```

### **Key Functions:**
- `enhancePromptForNovel()` - Smart prompt enhancement
- `getNovelAIConfig()` - AI model configuration
- `suggestTemplateFromPrompt()` - Auto template suggestion
- `getModelUpgradeMessage()` - Model optimization hints

## 💰 Cost Optimization

### **Budget: $10 USD**
- **Recommended:** Claude 3.5 Haiku
- **Estimated usage:** ~400-500 interactions
- **Perfect for:** Regular novel writing sessions

### **Budget: $25 USD**
- **Recommended:** Claude 3.5 Sonnet
- **Estimated usage:** ~150-200 interactions
- **Perfect for:** High-quality creative writing

### **Budget: $50+ USD**
- **Recommended:** Claude 3 Opus
- **Estimated usage:** ~50-75 interactions
- **Perfect for:** Professional-level novel writing

## 🎯 Results You Can Expect

### **Character Development:**
- 3-dimensional characters with depth
- Realistic motivations and flaws
- Compelling character arcs
- Authentic dialogue voices

### **Plot Structure:**
- Well-paced narrative flow
- Effective conflict escalation
- Satisfying story resolution
- Engaging plot twists

### **Writing Quality:**
- Show vs tell balance
- Vivid sensory descriptions
- Emotional resonance
- Literary merit

## 🚀 Getting Started

1. **Setup Environment Variables:**
   ```bash
   VITE_BACKEND_HOST=your-backend-url
   OPENROUTER_API_KEY=your-openrouter-key
   APP_MODE=oss
   ```

2. **Choose Your Model:**
   - Budget: Claude 3.5 Haiku
   - Balanced: Claude 3.5 Sonnet  
   - Premium: Claude 3 Opus

3. **Start Writing:**
   - Toggle Novel Mode
   - Use Quick Start or Templates
   - Let AI guide you with questions
   - Iterate and improve

## 🎉 Happy Writing!

Novel Writing Mode dirancang untuk membuat proses creative writing menjadi lebih enjoyable dan productive. AI akan menjadi creative partner yang membantu mengembangkan cerita terbaik Anda.

**Remember:** Semakin detail Anda dalam menjawab pertanyaan AI, semakin baik dan spesifik saran yang akan diberikan!