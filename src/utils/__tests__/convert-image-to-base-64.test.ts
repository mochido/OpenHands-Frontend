import { describe, it, expect } from "vitest";
import { extractBase64FromDataUrl } from "../convert-image-to-base-64";

describe("extractBase64FromDataUrl", () => {
  it("should extract base64 from data URL", () => {
    const dataUrl = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    const expected = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    
    const result = extractBase64FromDataUrl(dataUrl);
    
    expect(result).toBe(expected);
  });

  it("should handle PNG data URL", () => {
    const dataUrl = "data:image/png;base64,testbase64string";
    const expected = "testbase64string";
    
    const result = extractBase64FromDataUrl(dataUrl);
    
    expect(result).toBe(expected);
  });

  it("should handle data URL without mime type", () => {
    const dataUrl = "data:;base64,testbase64string";
    const expected = "testbase64string";
    
    const result = extractBase64FromDataUrl(dataUrl);
    
    expect(result).toBe(expected);
  });
});