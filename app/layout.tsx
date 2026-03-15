import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeakUp — English Speaking Practice",
  description: "Practice English speaking with AI-powered feedback",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}