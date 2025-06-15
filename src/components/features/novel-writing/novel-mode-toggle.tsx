import React from "react";
import { useTranslation } from "react-i18next";
import { BookOpen, Code } from "lucide-react";
import { I18nKey } from "#/i18n/declaration";

interface NovelModeToggleProps {
  isNovelMode: boolean;
  onToggle: (isNovelMode: boolean) => void;
}

export function NovelModeToggle({ isNovelMode, onToggle }: NovelModeToggleProps) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
      <span className="text-sm text-gray-300">Mode:</span>
      <div className="flex bg-gray-700 rounded-md p-1">
        <button
          type="button"
          onClick={() => onToggle(false)}
          className={`flex items-center gap-2 px-3 py-1 rounded text-sm transition-colors ${
            !isNovelMode
              ? "bg-blue-600 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <Code size={16} />
          Coding
        </button>
        <button
          type="button"
          onClick={() => onToggle(true)}
          className={`flex items-center gap-2 px-3 py-1 rounded text-sm transition-colors ${
            isNovelMode
              ? "bg-purple-600 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <BookOpen size={16} />
          Novel Writing
        </button>
      </div>
    </div>
  );
}