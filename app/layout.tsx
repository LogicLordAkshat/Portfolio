import { Inter, Dancing_Script } from "next/font/google"; // MODIFIED: Import Dancing_Script instead of Playfair_Display
import "./globals.css";
import { ThemeProvider } from "./provider";
import type { Metadata } from "next"; // ADDED: Import Metadata type

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); // MODIFIED: Added variable for Inter

// MODIFIED: Configure Dancing_Script font instead of Playfair_Display
const playfairDisplay = Dancing_Script({ // Renamed variable for clarity, but still points to the same CSS variable
  subsets: ["latin"],
  variable: "--font-playfair-display", // Keep the same CSS variable name for compatibility with tailwind.config.js
  display: "swap", // Ensures font is displayed quickly
});

export const metadata: Metadata = {
  title: "Akshat's Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      {/* MODIFIED: Apply both font variables to the body */}
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
