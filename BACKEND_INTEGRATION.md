# 🔧 Backend Integration for Novel Writing Mode

## 📋 Overview

Untuk Novel Writing Mode bekerja optimal, backend perlu dimodifikasi untuk:

1. **Mendeteksi Novel Mode** dari frontend
2. **Menggunakan system prompt khusus** untuk creative writing
3. **Mengoptimalkan AI model configuration** untuk novel writing
4. **Mengatur parameter AI** yang tepat (temperature, max_tokens, dll)

## 🔄 Frontend → Backend Communication

### **Current Message Format**
```json
{
  "action": "message",
  "args": {
    "content": "User message here",
    "image_urls": [],
    "timestamp": "2024-06-15T21:00:00.000Z"
  }
}
```

### **Enhanced Message Format for Novel Mode**
```json
{
  "action": "message", 
  "args": {
    "content": "Enhanced prompt from novel service",
    "image_urls": [],
    "timestamp": "2024-06-15T21:00:00.000Z",
    "novel_mode": true,
    "original_prompt": "Original user input",
    "template_used": "character-development" // optional
  }
}
```

## 🤖 Backend Modifications Required

### **1. Message Handler Enhancement**

```python
# In your message handler (e.g., websocket handler)
def handle_user_message(data):
    content = data['args']['content']
    novel_mode = data['args'].get('novel_mode', False)
    original_prompt = data['args'].get('original_prompt', content)
    template_used = data['args'].get('template_used')
    
    if novel_mode:
        # Use novel writing configuration
        system_prompt = get_novel_system_prompt()
        model_config = get_novel_model_config()
        ai_params = get_novel_ai_params()
    else:
        # Use default coding configuration
        system_prompt = get_default_system_prompt()
        model_config = get_default_model_config()
        ai_params = get_default_ai_params()
    
    # Process message with appropriate configuration
    response = process_with_ai(
        content=content,
        system_prompt=system_prompt,
        model_config=model_config,
        **ai_params
    )
```

### **2. Novel System Prompt**

```python
def get_novel_system_prompt():
    return """
Anda adalah mentor novel profesional yang ahli dalam creative writing. 

🎭 KEAHLIAN UTAMA:
- Character development dan psikologi karakter mendalam
- Plot structure dan narrative pacing yang compelling  
- Dialogue writing yang natural dan authentic
- World building yang immersive dan believable
- Genre-specific writing techniques
- Professional editing dan revision guidance

🎯 PENDEKATAN WAJIB:
1. SELALU BERTANYA DETAIL DULU sebelum memberikan saran
   - "Genre apa yang Anda targetkan?"
   - "Siapa target reader Anda?" 
   - "Apa konflik utama yang ingin Anda explore?"
   - "Sudah ada outline atau masih brainstorming?"
   - "Karakter utama seperti apa yang Anda bayangkan?"

2. BERIKAN GUIDANCE YANG SPESIFIK DAN ACTIONABLE
   - Contoh konkret, bukan teori umum
   - Multiple options untuk dipilih
   - Step-by-step guidance yang clear
   - Reference ke teknik writing yang proven

3. PRIORITASKAN STORYTELLING QUALITY
   - Emotional resonance dengan reader
   - Character development yang authentic
   - Plot yang engaging dan well-paced
   - Literary merit dan artistic value

🚫 JANGAN PERNAH:
- Memberikan saran generic tanpa bertanya detail dulu
- Assume genre atau target audience
- Memberikan template kosong tanpa guidance
- Fokus hanya pada technical writing tanpa story quality

Gunakan bahasa Indonesia yang natural dan supportive. Tunjukkan antusiasme untuk membantu mengembangkan cerita yang luar biasa!
"""

def get_novel_model_config():
    """Optimal model configuration for creative writing"""
    return {
        "model": "anthropic/claude-3-opus-20240229",  # Best for creative writing
        "fallback_models": [
            "anthropic/claude-3-5-sonnet-20241022",   # Good balance
            "anthropic/claude-3-5-haiku-20241022"     # Budget option
        ]
    }

def get_novel_ai_params():
    """AI parameters optimized for creative writing"""
    return {
        "temperature": 0.8,        # Higher creativity
        "max_tokens": 4000,        # Longer responses for detailed guidance
        "top_p": 0.9,             # More diverse responses
        "frequency_penalty": 0.3,  # Reduce repetition
        "presence_penalty": 0.2    # Encourage new topics
    }
```

### **3. Model Selection Logic**

```python
def select_optimal_model_for_novel(user_budget=None, quality_preference="balanced"):
    """
    Select the best model based on budget and quality needs
    """
    models = {
        "premium": {
            "model": "anthropic/claude-3-opus-20240229",
            "cost_per_1k_tokens": 0.075,  # Output tokens
            "quality": "highest",
            "best_for": "Complex character development, literary quality"
        },
        "balanced": {
            "model": "anthropic/claude-3-5-sonnet-20241022", 
            "cost_per_1k_tokens": 0.015,
            "quality": "high",
            "best_for": "Most novel writing tasks"
        },
        "budget": {
            "model": "anthropic/claude-3-5-haiku-20241022",
            "cost_per_1k_tokens": 0.00125,
            "quality": "good", 
            "best_for": "Budget-conscious writers, many interactions"
        }
    }
    
    if user_budget:
        if user_budget >= 50:
            return models["premium"]
        elif user_budget >= 25:
            return models["balanced"]
        else:
            return models["budget"]
    
    return models[quality_preference]
```

### **4. Enhanced Settings API**

```python
# Add to your settings endpoint
class NovelWritingSettings:
    preferred_model: str = "anthropic/claude-3-5-sonnet-20241022"
    temperature: float = 0.8
    max_tokens: int = 4000
    enable_smart_prompts: bool = True
    default_language: str = "id"  # Indonesian
    
# In your settings API
@app.post("/api/settings")
def save_settings(settings: dict):
    # Handle novel writing specific settings
    if "novel_writing" in settings:
        novel_settings = NovelWritingSettings(**settings["novel_writing"])
        # Save to user preferences
        save_user_novel_preferences(novel_settings)
    
    # Handle other settings...
```

## 📡 API Endpoints to Add/Modify

### **1. Model Recommendations**
```python
@app.get("/api/novel/model-recommendations")
def get_novel_model_recommendations(budget: float = None):
    """Get model recommendations based on budget"""
    return {
        "recommended": select_optimal_model_for_novel(budget),
        "alternatives": get_alternative_models(),
        "cost_comparison": get_cost_comparison()
    }
```

### **2. Novel Templates**
```python
@app.get("/api/novel/templates")
def get_novel_templates():
    """Get available novel writing templates"""
    return {
        "templates": [
            {
                "id": "character-development",
                "name": "Character Development",
                "description": "Deep character psychology and development",
                "system_prompt_addition": "Focus on character psychology..."
            },
            # ... other templates
        ]
    }
```

### **3. Smart Prompt Enhancement**
```python
@app.post("/api/novel/enhance-prompt")
def enhance_prompt_for_novel(prompt: str, context: dict = None):
    """Enhance user prompt for better novel writing guidance"""
    enhanced = enhance_prompt_with_context(prompt, context)
    return {
        "original": prompt,
        "enhanced": enhanced,
        "suggestions": get_prompt_suggestions(prompt)
    }
```

## 🔧 Implementation Steps

### **Phase 1: Basic Integration**
1. ✅ Modify message handler to detect `novel_mode`
2. ✅ Add novel system prompt
3. ✅ Configure AI parameters for creative writing
4. ✅ Test basic novel mode functionality

### **Phase 2: Advanced Features**
1. ✅ Add model selection logic
2. ✅ Implement template-specific prompts
3. ✅ Add novel writing settings API
4. ✅ Create model recommendation endpoint

### **Phase 3: Optimization**
1. ✅ Add cost tracking for novel mode
2. ✅ Implement smart prompt enhancement
3. ✅ Add usage analytics
4. ✅ Performance optimization

## 🧪 Testing

### **Test Cases**
```python
def test_novel_mode_detection():
    """Test that novel mode is properly detected"""
    message = {
        "action": "message",
        "args": {
            "content": "Help me develop a character",
            "novel_mode": True
        }
    }
    response = handle_message(message)
    assert response.system_prompt == get_novel_system_prompt()

def test_model_selection():
    """Test optimal model selection"""
    model = select_optimal_model_for_novel(budget=10)
    assert model["model"] == "anthropic/claude-3-5-haiku-20241022"
    
    model = select_optimal_model_for_novel(budget=50)
    assert model["model"] == "anthropic/claude-3-opus-20240229"
```

## 📊 Expected Results

### **Before Integration**
- Generic AI responses for creative writing
- No specialized prompts for novel writing
- Suboptimal model selection
- No creative writing guidance

### **After Integration**
- ✅ AI asks clarifying questions first
- ✅ Specialized novel writing expertise
- ✅ Optimal model selection for creative tasks
- ✅ Professional-level creative writing guidance
- ✅ Cost-effective model recommendations
- ✅ Template-specific AI behavior

## 🚀 Deployment

1. **Update backend dependencies** (if needed)
2. **Deploy new message handler** with novel mode support
3. **Add novel system prompts** to configuration
4. **Update API endpoints** for novel features
5. **Test integration** with frontend
6. **Monitor performance** and costs

## 💡 Benefits

### **For Users**
- **Better creative writing guidance** with AI that asks questions first
- **Cost optimization** with appropriate model selection
- **Professional-level mentoring** for novel writing
- **Specialized templates** for different writing needs

### **For Developers**
- **Clean separation** between coding and creative writing modes
- **Flexible configuration** for different AI behaviors
- **Scalable architecture** for adding more specialized modes
- **Cost tracking** and optimization features

---

**Ready to implement?** Start with Phase 1 for basic functionality, then gradually add advanced features. The frontend is already prepared to send the enhanced message format! 🎭✍️