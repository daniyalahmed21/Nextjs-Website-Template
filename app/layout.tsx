import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
// @ts-expect-error: declaration not found
import "./globals.css";
import Navbar from "@/components/navbar";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BetterStack",
  description:
    "Template for BetterStack made with Next.js, Tailwind CSS and motion for animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manRope.variable} ${inter.variable} antialiased bg-background color-foreground`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
