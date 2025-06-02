// Configuration for dynamic content from Google Sheets
export interface ProfileConfig {
  // Profile Information
  name: string;
  username: string;
  location: string;
  totalFollowers: string;

  // Images
  profileImage: string;
  galleryImages: string[];
  exclusivePhotos: string[];
  exclusiveVideos: string[];

  // Social Media Links
  whatsappLink: string;
  instagramLink: string;
  telegramLink: string;

  // CTA and Links
  ctaButtonText: string;
  ctaButtonLink: string;
  floatingBannerText: string;
  floatingBannerLink: string;

  // Meta Information for SEO
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;

  // Footer Links
  privacyLink: string;
  cookieNoticeLink: string;
  termsLink: string;

  // Steps Instructions
  stepsTitle: string;
  step1: string;
  step2: string;
  step3: string;
}

// Default configuration (fallback)
export const defaultConfig: ProfileConfig = {
  name: "Sarah Johnson",
  username: "@sarahcreates",
  location: "United States",
  totalFollowers: "125K",

  profileImage: "https://i.imgur.com/XnzUEAy.jpeg",
  galleryImages: [
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg"
  ],
  exclusivePhotos: [
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg"
  ],
  exclusiveVideos: [
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg",
    "https://i.imgur.com/XnzUEAy.jpeg"
  ],

  whatsappLink: "https://wa.me/1234567890",
  instagramLink: "https://instagram.com/sarahcreates",
  telegramLink: "https://t.me/sarahcreates",

  ctaButtonText: "🎉 Access Free Today",
  ctaButtonLink: "https://linkme.bio/signup",
  floatingBannerText: "FREE ACCESS FOR YOU 💦🥵",
  floatingBannerLink: "https://linkme.bio/signup",

  metaTitle: "Sarah Johnson - Exclusive Content Creator | LinkMe Profile",
  metaDescription: "Access exclusive photos and videos from Sarah Johnson. Join thousands of followers for premium content. No CC, No Fake, No Subscribe required.",
  metaKeywords: "Sarah Johnson, exclusive content, premium photos, videos, content creator, social media",
  canonicalUrl: "https://linkme-template.netlify.app",

  privacyLink: "https://linkme.bio/privacy",
  cookieNoticeLink: "https://linkme.bio/cookies",
  termsLink: "https://linkme.bio/terms",

  stepsTitle: "⬇️ With 3 Steps ⬇️",
  step1: "1. Sign Up",
  step2: "2. Find and Add My Username",
  step3: "3. Access Exclusive Content 24 Hours"
};

// Google Sheets configuration
export const GOOGLE_SHEETS_CONFIG = {
  // Replace with your Google Sheets ID
  SHEET_ID: "YOUR_GOOGLE_SHEET_ID_HERE",

  // Replace with your Google Sheets API key
  API_KEY: "YOUR_GOOGLE_SHEETS_API_KEY_HERE",

  // Sheet name (tab name in your Google Sheet)
  SHEET_NAME: "ProfileConfig",

  // Cache duration in milliseconds (5 minutes)
  CACHE_DURATION: 5 * 60 * 1000,
};

// Function to fetch configuration from Google Sheets
export async function fetchConfigFromGoogleSheets(): Promise<ProfileConfig> {
  try {
    if (!GOOGLE_SHEETS_CONFIG.SHEET_ID || !GOOGLE_SHEETS_CONFIG.API_KEY) {
      console.warn('Google Sheets configuration not set, using default config');
      return defaultConfig;
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/values/${GOOGLE_SHEETS_CONFIG.SHEET_NAME}?key=${GOOGLE_SHEETS_CONFIG.API_KEY}`;

    const response = await fetch(url, {
      next: { revalidate: GOOGLE_SHEETS_CONFIG.CACHE_DURATION / 1000 } // Next.js cache
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Google Sheets: ${response.statusText}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length < 2) {
      throw new Error('Invalid Google Sheets data format');
    }

    // Convert rows to configuration object
    // Expected format: [["key", "value"], ["name", "Sarah Johnson"], ...]
    const config: Partial<ProfileConfig> = {};

    for (let i = 1; i < rows.length; i++) {
      const [key, value] = rows[i];
      if (key && value) {
        // Handle array fields (comma-separated values)
        if (['galleryImages', 'exclusivePhotos', 'exclusiveVideos'].includes(key)) {
          config[key as keyof ProfileConfig] = value.split(',').map((item: string) => item.trim()) as any;
        } else {
          config[key as keyof ProfileConfig] = value as any;
        }
      }
    }

    // Merge with default config to ensure all fields are present
    return { ...defaultConfig, ...config };

  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    return defaultConfig;
  }
}

// In-memory cache for configuration
let cachedConfig: ProfileConfig | null = null;
let cacheTimestamp: number = 0;

// Function to get configuration with caching
export async function getProfileConfig(): Promise<ProfileConfig> {
  const now = Date.now();

  // Return cached config if still valid
  if (cachedConfig && (now - cacheTimestamp) < GOOGLE_SHEETS_CONFIG.CACHE_DURATION) {
    return cachedConfig;
  }

  // Fetch new config
  const config = await fetchConfigFromGoogleSheets();

  // Update cache
  cachedConfig = config;
  cacheTimestamp = now;

  return config;
}
