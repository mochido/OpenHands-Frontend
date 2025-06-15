import axios, { AxiosError, AxiosResponse } from "axios";

// Get backend URL from environment variables
const getBackendURL = () => {
  // For production deployment
  if (import.meta.env.VITE_BACKEND_HOST) {
    const protocol = import.meta.env.VITE_USE_TLS === 'true' ? 'https' : 'http';
    return `${protocol}://${import.meta.env.VITE_BACKEND_HOST}`;
  }
  
  // For development or when VITE_BACKEND_BASE_URL is set
  if (import.meta.env.VITE_BACKEND_BASE_URL) {
    return `${window.location.protocol}//${import.meta.env.VITE_BACKEND_BASE_URL}`;
  }
  
  // Fallback to same host (for development)
  return `${window.location.protocol}//${window?.location.host}`;
};

export const openHands = axios.create({
  baseURL: getBackendURL(),
  timeout: 30000, // 30 seconds timeout
  withCredentials: false, // Set to true if you need cookies
});

// Helper function to check if a response contains an email verification error
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkForEmailVerificationError = (data: any): boolean => {
  const EMAIL_NOT_VERIFIED = "EmailNotVerifiedError";

  if (typeof data === "string") {
    return data.includes(EMAIL_NOT_VERIFIED);
  }

  if (typeof data === "object" && data !== null) {
    if ("message" in data) {
      const { message } = data;
      if (typeof message === "string") {
        return message.includes(EMAIL_NOT_VERIFIED);
      }
      if (Array.isArray(message)) {
        return message.some(
          (msg) => typeof msg === "string" && msg.includes(EMAIL_NOT_VERIFIED),
        );
      }
    }

    // Search any values in object in case message key is different
    return Object.values(data).some(
      (value) =>
        (typeof value === "string" && value.includes(EMAIL_NOT_VERIFIED)) ||
        (Array.isArray(value) &&
          value.some(
            (v) => typeof v === "string" && v.includes(EMAIL_NOT_VERIFIED),
          )),
    );
  }

  return false;
};

// Set up the global interceptor
openHands.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Check if it's a 403 error with the email verification message
    if (
      error.response?.status === 403 &&
      checkForEmailVerificationError(error.response?.data)
    ) {
      if (window.location.pathname !== "/settings/user") {
        window.location.reload();
      }
    }

    // Continue with the error for other error handlers
    return Promise.reject(error);
  },
);
