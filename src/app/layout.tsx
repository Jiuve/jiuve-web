import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiuve - Custom AI Solutions That Work",
  description: "Jiuve delivers end-to-end AI solutions from concept to deployment. We combine strategic thinking with hands-on development for logistics, agents, and analytics.",
  keywords: ["AI solutions", "custom AI", "AI development", "logistics AI", "AI agents", "analytics AI", "machine learning"],
  authors: [{ name: "Jiuve" }],
  creator: "Jiuve",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jiuve.com",
    title: "Jiuve - Custom AI Solutions That Work",
    description: "Jiuve delivers end-to-end AI solutions from concept to deployment. We combine strategic thinking with hands-on development for logistics, agents, and analytics.",
    siteName: "Jiuve",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiuve - Custom AI Solutions That Work",
    description: "Jiuve delivers end-to-end AI solutions from concept to deployment. We combine strategic thinking with hands-on development for logistics, agents, and analytics.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
