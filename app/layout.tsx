import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./Components/Navbar/Header/Header";


const inter = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dicefits",
  description: "In development by the Dicefits team.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Header/>{children}</body>
    </html>
  );
}
