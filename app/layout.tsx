import type { Metadata } from "next";
import { Playfair_Display, Space_Mono } from "next/font/google";
import { AuthProvider } from "@/lib/context/AuthContext";
import AuthControl from "@/components/AuthControl";
import AuthModal from "@/components/AuthModal";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnPassant Chess Forum — ABESEC",
  description: "The official chess club of ABES Engineering College. Outsmart the entire arena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E8E8E6]">
        <AuthProvider>
          {children}
          <AuthControl />
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  );
}
