import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { ConvexClientProvider } from "@/components/providers/ConvexClerkProvider";
import SideMenu from "@/components/SideMenu";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat - Bot",
  description: "Let's Have a Chat",
  icons: "./chatbot.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ConvexClientProvider>
    <html lang="en">
      <body className={inter.className}>
        <SideMenu/>{children}</body>
    </html>
    </ConvexClientProvider>
  );
}
