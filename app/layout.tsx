import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malith Bandara - Portfolio",
  description: "Welcome to the portfolio of Malith Bandara, a passionate software engineering undergraduate and MERN stack developer. Explore my projects, skills, and experience in web development, showcasing my expertise in MongoDB, Express.js, React, and Node.js. Discover how I combine creativity and technical proficiency to build innovative solutions. Let's connect and collaborate on exciting projects in the world of software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}
