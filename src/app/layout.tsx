import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  title: "BeckermanEDU | Executive Functioning & Academic Support",
  description:
    "Personalized executive functioning coaching and academic tutoring for students in grades 4–12. Specializing in ADHD, learning disabilities, and individualized support in NYC and online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}