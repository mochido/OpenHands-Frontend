import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Users, 
  BookOpen, 
  MessageCircle, 
  Globe, 
  Heart, 
  Sword,
  Search,
  Edit
} from "lucide-react";

interface NovelTemplate {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  prompt: string;
  category: "character" | "plot" | "dialogue" | "world" | "genre" | "editing";
}

const NOVEL_TEMPLATES: NovelTemplate[] = [
  // Character Development
  {
    id: "character-development",
    title: "Character Development",
    description: "Create complex, three-dimensional characters",
    icon: <Users size={20} />,
    category: "character",
    prompt: `Sebagai expert novelist dan character development specialist, bantu saya mengembangkan karakter yang kompleks dan menarik.

Saya ingin membuat karakter dengan:
- Personality yang unik dan believable
- Backstory yang compelling
- Character arc yang meaningful
- Motivasi dan konflik internal yang kuat

Tolong berikan panduan step-by-step untuk character development dan tanyakan detail yang diperlukan.`
  },
  {
    id: "character-psychology",
    title: "Character Psychology",
    description: "Deep dive into character motivations and psychology",
    icon: <Users size={20} />,
    category: "character",
    prompt: `Roleplay sebagai character psychologist dan expert novelist. Bantu saya menganalisis dan mengembangkan psikologi karakter yang mendalam.

Fokus pada:
- Motivasi tersembunyi dan conscious goals
- Trauma atau pengalaman yang membentuk karakter
- Cara karakter bereaksi dalam situasi stress
- Relationship patterns dan attachment style
- Character flaws yang membuat mereka human

Mari kita explore psychology karakter secara detail.`
  },

  // Plot Structure
  {
    id: "plot-outline",
    title: "Plot Structure & Outline",
    description: "Build compelling story structure and plot points",
    icon: <BookOpen size={20} />,
    category: "plot",
    prompt: `Sebagai expert story structure consultant dan plot development specialist, bantu saya membuat outline yang solid untuk novel.

Saya butuh bantuan dengan:
- Three-act structure atau alternative structure
- Key plot points dan turning points
- Pacing dan tension building
- Subplot integration
- Conflict escalation

Tolong guide saya through proses outlining yang systematic dan effective.`
  },
  {
    id: "plot-conflict",
    title: "Conflict & Tension",
    description: "Create compelling conflicts and maintain tension",
    icon: <Sword size={20} />,
    category: "plot",
    prompt: `Jadi expert dalam conflict development dan tension building. Bantu saya menciptakan konflik yang compelling dan maintain tension throughout story.

Areas yang perlu dibahas:
- Internal vs external conflict
- Escalating stakes
- Tension dalam setiap scene
- Conflict resolution yang satisfying
- Multiple layers of conflict

Mari kita develop conflict yang akan keep readers engaged.`
  },

  // Dialogue
  {
    id: "dialogue-writing",
    title: "Dialogue Writing",
    description: "Write natural, character-specific dialogue",
    icon: <MessageCircle size={20} />,
    category: "dialogue",
    prompt: `Sebagai dialogue coach dan expert dalam character voice, bantu saya menulis dialogue yang natural dan distinctive.

Fokus pada:
- Unique voice untuk setiap karakter
- Subtext dan implied meaning
- Dialogue tags dan action beats
- Realistic speech patterns
- Advancing plot through conversation

Tolong review dan improve dialogue yang saya tulis, atau bantu create new dialogue.`
  },

  // World Building
  {
    id: "world-building",
    title: "World Building",
    description: "Create immersive settings and worlds",
    icon: <Globe size={20} />,
    category: "world",
    prompt: `Roleplay sebagai world building expert dan setting development specialist. Bantu saya menciptakan world yang immersive dan believable.

Elements yang perlu dikembangkan:
- Physical environment dan geography
- Culture, customs, dan social structure
- History dan background events
- Rules dan limitations (especially untuk fantasy/sci-fi)
- Sensory details yang bring world to life

Mari kita build world yang readers akan want to live in.`
  },

  // Genre-Specific
  {
    id: "romance-writing",
    title: "Romance Writing",
    description: "Craft compelling romantic relationships and chemistry",
    icon: <Heart size={20} />,
    category: "genre",
    prompt: `Sebagai expert romance novelist, bantu saya mengembangkan romantic relationship yang compelling dan chemistry yang believable.

Romance elements yang perlu dibahas:
- Building sexual dan emotional tension
- Meet-cute atau first encounter
- Relationship development dan pacing
- Conflict yang realistic dalam relationship
- Satisfying romantic resolution

Tolong guide saya dalam crafting romance yang akan make readers swoon.`
  },

  // Research & Development
  {
    id: "research-assistant",
    title: "Research Assistant",
    description: "Research background information for your story",
    icon: <Search size={20} />,
    category: "world",
    prompt: `Jadi research assistant untuk novel writing. Bantu saya mengumpulkan informasi akurat dan detailed untuk background story.

Saya butuh research tentang:
- Historical periods atau events
- Professional atau technical details
- Cultural atau geographical information
- Scientific atau medical accuracy
- Legal atau procedural aspects

Tolong provide comprehensive research yang akan make story authentic dan believable.`
  },

  // Editing & Revision
  {
    id: "professional-editor",
    title: "Professional Editor",
    description: "Get professional editing feedback and suggestions",
    icon: <Edit size={20} />,
    category: "editing",
    prompt: `Roleplay sebagai professional editor dengan 20+ years experience. Review writing saya dan berikan feedback yang constructive dan detailed.

Areas untuk review:
- Plot consistency dan pacing
- Character development dan voice
- Dialogue effectiveness
- Show vs tell balance
- Grammar, style, dan flow
- Overall story structure

Tolong berikan feedback yang specific, actionable, dan encouraging seperti professional editor.`
  }
];

interface NovelTemplatesProps {
  onTemplateSelect: (prompt: string, templateId?: string) => void;
  onClose: () => void;
}

export function NovelTemplates({ onTemplateSelect, onClose }: NovelTemplatesProps) {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "All Templates" },
    { id: "character", label: "Character" },
    { id: "plot", label: "Plot & Structure" },
    { id: "dialogue", label: "Dialogue" },
    { id: "world", label: "World Building" },
    { id: "genre", label: "Genre-Specific" },
    { id: "editing", label: "Editing & Review" }
  ];

  const filteredTemplates = selectedCategory === "all" 
    ? NOVEL_TEMPLATES 
    : NOVEL_TEMPLATES.filter(template => template.category === selectedCategory);

  const handleTemplateSelect = (template: NovelTemplate) => {
    onTemplateSelect(template.prompt, template.id);
    onClose();
  };

  return (
    <div className="novel-templates bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <BookOpen size={20} className="text-purple-400" />
          Novel Writing Templates
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === category.id
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredTemplates.map((template) => (
          <button
            key={template.id}
            data-template-id={template.id}
            onClick={() => handleTemplateSelect(template)}
            className="text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
          >
            <div className="flex items-start gap-3">
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                {template.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white group-hover:text-purple-200 transition-colors">
                  {template.title}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {template.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
        <p className="text-sm text-purple-200">
          💡 <strong>Tip:</strong> These templates will activate specialized AI experts for novel writing. 
          Each template is designed to give you professional-level guidance and feedback.
        </p>
      </div>
    </div>
  );
}