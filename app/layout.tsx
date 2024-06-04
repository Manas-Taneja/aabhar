import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AAbhar",
  description: "In development by the AAbhar team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AABHAR</title>
        <meta name="description" content="A fantastic Next.js application" />
      </head>
      <body className={inter.className} style={{ color: 'white' }}>
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}