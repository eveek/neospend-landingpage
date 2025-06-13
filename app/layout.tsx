import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "NeoSpend",
  description: "A modern, secure, and user-friendly spending tracker",
  icons: {
    icon: "/logo-head.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
