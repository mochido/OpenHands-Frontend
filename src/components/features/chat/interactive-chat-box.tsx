import React from "react";
import { ChatInput } from "./chat-input";
import { cn } from "#/utils/utils";
import { ImageCarousel } from "../images/image-carousel";
import { UploadImageInput } from "../images/upload-image-input";
import { NovelModeToggle } from "../novel-writing/novel-mode-toggle";
import { NovelTemplates } from "../novel-writing/novel-templates";
import { NovelQuickStart } from "../novel-writing/novel-quick-start";
import { BookOpen, Sparkles, Zap } from "lucide-react";
import { 
  DEFAULT_NOVEL_MODEL, 
  enhancePromptForNovel,
  getModelUpgradeMessage,
  suggestTemplateFromPrompt 
} from "#/services/novel-service";

interface InteractiveChatBoxProps {
  isDisabled?: boolean;
  mode?: "stop" | "submit";
  onSubmit: (message: string, images: File[], novelModeInfo?: {
    isNovelMode: boolean;
    originalPrompt?: string;
    templateUsed?: string;
  }) => void;
  onStop: () => void;
  value?: string;
  onChange?: (message: string) => void;
  currentModel?: string;
}

export function InteractiveChatBox({
  isDisabled,
  mode = "submit",
  onSubmit,
  onStop,
  value,
  onChange,
  currentModel,
}: InteractiveChatBoxProps) {
  const [images, setImages] = React.useState<File[]>([]);
  const [isNovelMode, setIsNovelMode] = React.useState(false);
  const [showNovelTemplates, setShowNovelTemplates] = React.useState(false);
  const [showQuickStart, setShowQuickStart] = React.useState(false);
  const [suggestedTemplate, setSuggestedTemplate] = React.useState<string | null>(null);
  const [lastTemplateUsed, setLastTemplateUsed] = React.useState<string | null>(null);
  const [originalPrompt, setOriginalPrompt] = React.useState<string>("");

  const handleUpload = (files: File[]) => {
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = (message: string) => {
    // Enhance prompt for novel writing mode
    const finalMessage = isNovelMode ? enhancePromptForNovel(message) : message;
    
    // Prepare novel mode info
    const novelModeInfo = isNovelMode ? {
      isNovelMode: true,
      originalPrompt: message !== finalMessage ? message : undefined,
      templateUsed: lastTemplateUsed || undefined
    } : undefined;
    
    onSubmit(finalMessage, images, novelModeInfo);
    setImages([]);
    setLastTemplateUsed(null); // Reset after sending
    if (message) {
      onChange?.("");
    }
  };

  const handleTemplateSelect = (prompt: string, templateId?: string) => {
    onChange?.(prompt);
    if (templateId) {
      setLastTemplateUsed(templateId);
    }
  };

  const handleNovelModeToggle = (novelMode: boolean) => {
    setIsNovelMode(novelMode);
    if (novelMode) {
      // Auto-show quick start for first-time users
      setShowQuickStart(true);
    } else {
      setShowNovelTemplates(false);
      setShowQuickStart(false);
    }
  };

  // Get model upgrade message for novel writing
  const modelUpgradeMessage = isNovelMode && currentModel 
    ? getModelUpgradeMessage(currentModel) 
    : null;

  // Smart template suggestion based on input
  React.useEffect(() => {
    if (isNovelMode && value) {
      const suggestion = suggestTemplateFromPrompt(value);
      setSuggestedTemplate(suggestion);
    } else {
      setSuggestedTemplate(null);
    }
  }, [isNovelMode, value]);

  return (
    <div
      data-testid="interactive-chat-box"
      className="flex flex-col gap-[10px]"
    >
      {/* Novel Mode Toggle */}
      <div className="flex items-center justify-between">
        <NovelModeToggle 
          isNovelMode={isNovelMode} 
          onToggle={handleNovelModeToggle} 
        />
        
        {isNovelMode && (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setShowQuickStart(!showQuickStart);
                setShowNovelTemplates(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                showQuickStart 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-gray-600 hover:bg-gray-700"
              } text-white`}
            >
              <Zap size={16} />
              Quick Start
            </button>
            <button
              onClick={() => {
                setShowNovelTemplates(!showNovelTemplates);
                setShowQuickStart(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                showNovelTemplates 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "bg-gray-600 hover:bg-gray-700"
              } text-white`}
            >
              <BookOpen size={16} />
              Templates
            </button>
          </div>
        )}
      </div>

      {/* Novel Quick Start Panel */}
      {isNovelMode && showQuickStart && (
        <NovelQuickStart 
          onPromptSelect={handleTemplateSelect}
        />
      )}

      {/* Novel Templates Panel */}
      {isNovelMode && showNovelTemplates && (
        <NovelTemplates 
          onTemplateSelect={handleTemplateSelect}
          onClose={() => setShowNovelTemplates(false)}
        />
      )}

      {/* Novel Mode Indicator */}
      {isNovelMode && (
        <div className="space-y-3">
          <div className="p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-purple-200">
              <Sparkles size={16} />
              <span className="font-medium">Novel Writing Mode Active</span>
            </div>
            <p className="text-sm text-purple-300 mt-1">
              🎭 AI akan bertanya detail untuk memahami visi cerita Anda, memberikan saran yang spesifik, dan membantu mengembangkan karakter serta plot yang compelling.
            </p>
            <div className="mt-2 text-xs text-purple-400">
              <strong>Current Model:</strong> {currentModel || DEFAULT_NOVEL_MODEL}
            </div>
          </div>

          {/* Model Upgrade Suggestion */}
          {modelUpgradeMessage && (
            <div className="p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
              <p className="text-sm text-amber-200">{modelUpgradeMessage}</p>
            </div>
          )}

          {/* Smart Template Suggestion */}
          {suggestedTemplate && (
            <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-200">
                    💡 <strong>Smart Suggestion:</strong> Sepertinya Anda butuh template khusus untuk ini
                  </p>
                </div>
                <button
                  onClick={() => {
                    // Find and apply the suggested template
                    const templates = document.querySelectorAll('[data-template-id]');
                    const targetTemplate = Array.from(templates).find(
                      el => el.getAttribute('data-template-id') === suggestedTemplate
                    ) as HTMLElement;
                    if (targetTemplate) {
                      targetTemplate.click();
                    }
                  }}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                >
                  Use Template
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {images.length > 0 && (
        <ImageCarousel
          size="small"
          images={images.map((image) => URL.createObjectURL(image))}
          onRemove={handleRemoveImage}
        />
      )}

      <div
        className={cn(
          "flex items-end gap-1",
          "bg-tertiary border border-neutral-600 rounded-lg px-2",
          "transition-colors duration-200",
          "hover:border-neutral-500 focus-within:border-neutral-500",
          isNovelMode && "border-purple-500/50 bg-purple-900/10"
        )}
      >
        <UploadImageInput onUpload={handleUpload} />
        <ChatInput
          disabled={isDisabled}
          button={mode}
          onChange={onChange}
          onSubmit={handleSubmit}
          onStop={onStop}
          value={value}
          onImagePaste={handleUpload}
          className="py-[10px]"
          buttonClassName="py-[10px]"
          placeholder={isNovelMode ? "Describe your story, characters, or ask for writing guidance..." : undefined}
        />
      </div>
    </div>
  );
}
