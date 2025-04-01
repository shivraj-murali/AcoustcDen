import "@/app/globals.css";
import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Acoustc Den",
  description: "Acoustic Den offers expert advice, premium A/V equipment sales, and dedicated service, ensuring a satisfying journey into high-fidelity sound whether you seek consultation, purchase, or simply a great music experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
