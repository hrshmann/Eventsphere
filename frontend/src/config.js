// API Configuration
// In production (Vercel), use the same domain (empty string means same origin)
// In development, use localhost
const getApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  if (process.env.NODE_ENV === 'production') {
    // In production, use relative URLs (same domain)
    return '';
  }
  // Development fallback
  return 'http://localhost:5000';
};

const API_URL = getApiUrl();

export default API_URL;

