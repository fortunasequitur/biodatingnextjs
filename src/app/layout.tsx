import type { Metadata } from "next";
import "./globals.css";
import { getProfileConfig } from "../lib/config";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getProfileConfig();
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.metaKeywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.canonicalUrl,
      siteName: 'LinkMe Profile',
    },
    alternates: {
      canonical: data.canonicalUrl,
    },
  };
}

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
