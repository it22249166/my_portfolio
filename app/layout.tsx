import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { PortfolioModeProvider } from "@/context/PortfolioModeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malith Bandara - Portfolio",
  description: "Welcome to the portfolio of Malith Bandara, a passionate software engineering undergraduate and MERN stack developer. Explore my projects, skills, and experience in web development, showcasing my expertise in MongoDB, Express.js, React, and Node.js. Discover how I combine creativity and technical proficiency to build innovative solutions. Let's connect and collaborate on exciting projects in the world of software development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}>
        <PortfolioModeProvider>{children}</PortfolioModeProvider>
      </body>
    </html>
  );

}
