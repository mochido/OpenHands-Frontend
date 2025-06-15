// Novel Writing Service - AI Configuration for Creative Writing

export interface NovelAIConfig {
  model: string;
  systemPrompt: string;
  temperature: number;
  maxTokens: number;
  topP: number;
}

// Best AI models for novel writing (prioritized by quality for creative writing)
export const NOVEL_AI_MODELS = {
  // Premium - Best for creative writing
  CLAUDE_OPUS: "anthropic/claude-3-opus-20240229",
  
  // Excellent - Great balance of quality and cost
  CLAUDE_SONNET: "anthropic/claude-3-5-sonnet-20241022", 
  
  // Good - More affordable option
  CLAUDE_HAIKU: "anthropic/claude-3-5-haiku-20241022",
  
  // Alternative - GPT models
  GPT4_TURBO: "openai/gpt-4-turbo-preview",
  GPT4: "openai/gpt-4",
} as const;

// Default model for novel writing (Claude 3 Opus - best for creative writing)
export const DEFAULT_NOVEL_MODEL = NOVEL_AI_MODELS.CLAUDE_OPUS;

// System prompt optimized for novel writing with intelligent questioning
export const NOVEL_SYSTEM_PROMPT = `Anda adalah seorang novelis kelas dunia, mentor creative writing, dan editor profesional dengan 20+ tahun pengalaman di industri penerbitan. Anda ahli dalam mengembangkan cerita yang compelling dan membantu penulis mencapai potensi terbaik mereka.

🎭 **KEAHLIAN UTAMA:**
- Character development dan psikologi karakter
- Plot structure dan narrative pacing  
- Dialogue writing dan character voice
- World building dan setting creation
- Genre conventions dan literary techniques
- Publishing industry knowledge

📚 **FILOSOFI MENULIS:**
- "Show, don't tell" - Gunakan detail sensory yang vivid
- Ciptakan karakter 3 dimensi yang kompleks
- Bangun konflik dan tension yang compelling
- Maintain consistent POV dan voice
- Develop meaningful character arcs
- Tulis dialogue yang authentic dan distinctive

🎯 **PENDEKATAN ANDA:**
1. **SELALU BERTANYA DETAIL DULU** - Jangan langsung jawab, tapi gali informasi:
   - "Ceritakan lebih detail tentang..."
   - "Apa yang Anda bayangkan untuk karakter ini?"
   - "Genre apa yang Anda targetkan?"
   - "Siapa target reader Anda?"
   - "Apa konflik utama yang ingin Anda explore?"

2. **BERIKAN GUIDANCE YANG SPESIFIK:**
   - Contoh konkret dan actionable
   - Multiple options untuk dipilih
   - Step-by-step guidance
   - Industry best practices

3. **JAGA KUALITAS CERITA:**
   - Prioritaskan storytelling quality
   - Emotional resonance
   - Literary merit
   - Reader engagement

✍️ **GAYA KOMUNIKASI:**
- Tulis response yang panjang dan detailed
- Gunakan bahasa yang rich dan descriptive
- Berikan encouragement dan motivation
- Adaptasi dengan genre dan style yang diminta
- Selalu berikan contoh konkret

🎨 **PROSES KREATIF:**
- Pahami visi dan goals penulis
- Bantu overcome writer's block
- Suggest plot developments yang menarik
- Develop backstory dan motivasi karakter
- Create scene descriptions yang immersive

🔍 **STRATEGI BERTANYA YANG EFEKTIF:**
- Mulai dengan pertanyaan open-ended
- Gali detail yang spesifik
- Tanyakan tentang emotional core cerita
- Explore character motivations
- Understand target audience
- Clarify genre expectations

**INGAT:** Anda bukan hanya AI assistant - Anda adalah creative partner yang membantu craft compelling stories. Selalu prioritaskan kualitas storytelling, emotional resonance, dan literary merit. SELALU bertanya detail dulu sebelum memberikan saran agar hasil tidak ngawur dan sesuai visi penulis.`;

// AI configuration for novel writing
export const getNovelAIConfig = (customModel?: string): NovelAIConfig => ({
  model: customModel || DEFAULT_NOVEL_MODEL,
  systemPrompt: NOVEL_SYSTEM_PROMPT,
  temperature: 0.8, // Higher creativity for novel writing
  maxTokens: 4000, // Longer responses for detailed writing
  topP: 0.9, // Good balance of creativity and coherence
});

// Check if current model is optimized for novel writing
export const isNovelOptimizedModel = (model: string): boolean => {
  return Object.values(NOVEL_AI_MODELS).includes(model as any);
};

// Get recommended model upgrade message
export const getModelUpgradeMessage = (currentModel: string): string | null => {
  if (isNovelOptimizedModel(currentModel)) {
    return null;
  }
  
  return `💡 For better novel writing, consider switching to Claude 3 Opus or Claude 3.5 Sonnet - they're specifically optimized for creative writing and long-form content generation.`;
};

// Smart prompt enhancer for novel writing
export const enhancePromptForNovel = (originalPrompt: string): string => {
  const prompt = originalPrompt.trim();
  
  // Check if it's a very short/vague prompt that needs more guidance
  const isVaguePrompt = prompt.length < 50 || 
    ['help', 'bantuan', 'ide', 'stuck', 'bingung'].some(word => 
      prompt.toLowerCase().includes(word)
    );
  
  // Check if it's already a detailed novel-related prompt
  const novelKeywords = ['novel', 'cerita', 'karakter', 'plot', 'chapter', 'dialogue', 'tokoh'];
  const hasNovelContext = novelKeywords.some(keyword => 
    prompt.toLowerCase().includes(keyword)
  );
  
  if (isVaguePrompt) {
    return `${prompt}

PENTING: Sebagai expert novelist, tolong jangan langsung kasih saran umum. Tanyakan detail dulu:
- Genre apa yang ingin ditulis?
- Sudah ada ide karakter utama?
- Konflik atau tema apa yang ingin diangkat?
- Target pembaca seperti apa?
- Sudah ada outline atau masih brainstorming?

Setelah dapat detail, baru berikan guidance yang spesifik dan actionable.`;
  }
  
  if (hasNovelContext) {
    return `${prompt}

Sebagai expert novelist dan mentor creative writing, berikan guidance yang detailed dan spesifik. Jika ada yang kurang jelas, tanyakan detail lebih lanjut untuk memastikan saran yang diberikan tepat sasaran dan tidak ngawur.`;
  }
  
  return `Sebagai professional novelist dan creative writing expert, bantu saya dengan: ${prompt}

Tolong berikan guidance yang detailed dengan contoh konkret dan actionable suggestions. Jika perlu informasi lebih detail, silakan tanyakan.`;
};

// Smart template selector based on user input
export const suggestTemplateFromPrompt = (prompt: string): string | null => {
  const lowerPrompt = prompt.toLowerCase();
  
  if (lowerPrompt.includes('karakter') || lowerPrompt.includes('character')) {
    return 'character-development';
  }
  if (lowerPrompt.includes('plot') || lowerPrompt.includes('alur')) {
    return 'plot-outline';
  }
  if (lowerPrompt.includes('dialog') || lowerPrompt.includes('dialogue')) {
    return 'dialogue-writing';
  }
  if (lowerPrompt.includes('romance') || lowerPrompt.includes('cinta')) {
    return 'romance-writing';
  }
  if (lowerPrompt.includes('world') || lowerPrompt.includes('setting')) {
    return 'world-building';
  }
  if (lowerPrompt.includes('edit') || lowerPrompt.includes('review')) {
    return 'professional-editor';
  }
  
  return null;
};

// Export types
export type NovelModel = typeof NOVEL_AI_MODELS[keyof typeof NOVEL_AI_MODELS];