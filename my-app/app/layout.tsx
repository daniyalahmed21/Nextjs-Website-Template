import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
// @ts-expect-error: declaration not found
import "./globals.css";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "AgentForce Marketing Template",
  description:
    "Template for AgentForce Marketing made with Next.js, Tailwind CSS and motion for animations.",
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
        {children}
      </body>
    </html>
  );
}
