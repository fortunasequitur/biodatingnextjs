import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah Johnson - Exclusive Content Creator | LinkMe Profile",
  description: "Access exclusive photos and videos from Sarah Johnson. Join thousands of followers for premium content. No CC, No Fake, No Subscribe required.",
  keywords: "Sarah Johnson, exclusive content, premium photos, videos, content creator, social media",
  authors: [{ name: "Sarah Johnson" }],
  creator: "Sarah Johnson",
  publisher: "LinkMe",
  metadataBase: new URL('https://linkme-template.netlify.app'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://linkme-template.netlify.app',
    title: 'Sarah Johnson - Exclusive Content Creator',
    description: 'Access exclusive photos and videos from Sarah Johnson. Join thousands of followers for premium content.',
    images: [
      {
        url: 'https://i.imgur.com/XnzUEAy.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sarah Johnson - Content Creator Profile',
        type: 'image/jpeg',
      },
    ],
    siteName: 'LinkMe Profile',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@sarahcreates',
    creator: '@sarahcreates',
    title: 'Sarah Johnson - Exclusive Content Creator',
    description: 'Access exclusive photos and videos from Sarah Johnson. Join thousands of followers for premium content.',
    images: [
      {
        url: 'https://i.imgur.com/XnzUEAy.jpeg',
        alt: 'Sarah Johnson - Content Creator Profile',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'google-site-verification-code',
  },

  alternates: {
    canonical: 'https://linkme-template.netlify.app',
  },

  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#1a1a2e',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className="dark-theme">
        {children}
      </body>
    </html>
  );
}
