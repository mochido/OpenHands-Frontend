export const convertImageToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

// Helper function to extract pure base64 from data URL for API calls
export const extractBase64FromDataUrl = (dataUrl: string): string => {
  return dataUrl.split(',')[1];
};
