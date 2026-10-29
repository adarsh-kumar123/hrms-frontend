import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "FSPL | HRMS",
    template: "%s | HRMS",
  },
  icons: {
    icon: "/images/Frame237.webp",
  },
  description: "Human Resource Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrument.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}