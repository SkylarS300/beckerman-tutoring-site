import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beckerman Learning | Tutoring & Executive Functioning Coaching",
  description:
    "Personalized tutoring and executive functioning coaching for students K–12 and beyond. Specializing in learning disabilities, ADHD, and individualized academic support in NYC.",
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