import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "sonner";

const rockWell = localFont({
  src: [
    { path: "/fonts/RockWell-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
});

const raleWay = localFont({
  src: [
    { path: "/fonts/RaleWay-BoldItalic.ttf", weight: "700", style: "italic" },
    {
      path: "/fonts/RaleWay-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
});

const montaguSlab = localFont({
  src: [
    { path: "/fonts/MontaguSlab-Bold.ttf", weight: "400", style: "normal" },
  ],
});

const montserrat = localFont({
  src: [{ path: "/fonts/MontSerrat-Bold.ttf", weight: "600", style: "normal" }],
  variable: "--font-montserrat",
});

const inter = localFont({
  src: [
    { path: "/fonts/Inter-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cloud-City",
  description:
    "Scalable web solutions, e-commerce, UI/UX, branding, investment insights, and business consulting for growth and innovation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${rockWell.className} ${raleWay.className} ${montaguSlab.className} ${montserrat.className} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
