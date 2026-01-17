import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiva Sri Jonnala | Portfolio",
  description: "AI/ML Developer • Automation • UI/UX",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
