import React from "react";
import { BookOpen, Users, MessageCircle, Globe, Heart, Lightbulb } from "lucide-react";

interface NovelQuickStartProps {
  onPromptSelect: (prompt: string, templateId?: string) => void;
}

const QUICK_START_PROMPTS = [
  {
    id: "new-story",
    title: "Mulai Cerita Baru",
    icon: <BookOpen size={16} />,
    prompt: "Saya ingin mulai menulis novel baru tapi masih bingung. Bisa bantu saya brainstorming ide cerita yang menarik?"
  },
  {
    id: "character-help",
    title: "Kembangkan Karakter",
    icon: <Users size={16} />,
    prompt: "Saya punya ide karakter tapi masih shallow. Bantu saya mengembangkan karakter yang lebih kompleks dan menarik."
  },
  {
    id: "dialogue-improve",
    title: "Perbaiki Dialog",
    icon: <MessageCircle size={16} />,
    prompt: "Dialog dalam cerita saya terasa kaku dan tidak natural. Bagaimana cara menulis dialog yang lebih hidup?"
  },
  {
    id: "world-building",
    title: "Bangun Dunia Cerita",
    icon: <Globe size={16} />,
    prompt: "Saya butuh bantuan untuk membangun setting dan world building yang immersive untuk cerita fantasy saya."
  },
  {
    id: "romance-writing",
    title: "Tulis Adegan Romance",
    icon: <Heart size={16} />,
    prompt: "Bagaimana cara menulis chemistry dan romantic tension yang believable antara dua karakter?"
  },
  {
    id: "writers-block",
    title: "Atasi Writer's Block",
    icon: <Lightbulb size={16} />,
    prompt: "Saya stuck di tengah cerita dan tidak tahu harus melanjutkan kemana. Bisa bantu saya overcome writer's block?"
  }
];

export function NovelQuickStart({ onPromptSelect }: NovelQuickStartProps) {
  return (
    <div className="novel-quick-start p-4 bg-gray-900 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
        <BookOpen size={20} className="text-purple-400" />
        Quick Start - Novel Writing
      </h3>
      
      <p className="text-sm text-gray-300 mb-4">
        Pilih salah satu untuk memulai dengan guidance yang tepat:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {QUICK_START_PROMPTS.map((item) => (
          <button
            key={item.id}
            onClick={() => onPromptSelect(item.prompt, item.id)}
            className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-purple-800/30 rounded-lg transition-colors text-left group"
          >
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
              {item.icon}
            </div>
            <span className="text-sm text-gray-200 group-hover:text-white transition-colors">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 p-3 bg-purple-900/20 border border-purple-500/20 rounded-lg">
        <p className="text-xs text-purple-200">
          💡 <strong>Tips:</strong> AI akan bertanya detail dulu sebelum memberikan saran, 
          jadi jawab sejujur dan sedetail mungkin untuk hasil terbaik.
        </p>
      </div>
    </div>
  );
}