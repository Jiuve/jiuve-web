import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiuve - Custom AI Solutions That Work",
  description: "Jiuve delivers end-to-end AI solutions from concept to deployment. We combine strategic thinking with hands-on development for logistics, agents, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
