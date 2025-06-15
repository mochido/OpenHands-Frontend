import ActionType from "#/types/action-type";

export function createChatMessage(
  message: string,
  image_urls: string[],
  timestamp: string,
  novelMode?: boolean,
  originalPrompt?: string,
  templateUsed?: string,
) {
  const args: any = { 
    content: message, 
    image_urls, 
    timestamp 
  };

  // Add novel mode information if applicable
  if (novelMode) {
    args.novel_mode = true;
    if (originalPrompt && originalPrompt !== message) {
      args.original_prompt = originalPrompt;
    }
    if (templateUsed) {
      args.template_used = templateUsed;
    }
  }

  const event = {
    action: ActionType.MESSAGE,
    args,
  };
  return event;
}
