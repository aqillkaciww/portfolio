import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Aqil Tamimi | Frontend Developer",
  description: "Portfolio of Aqil Tamimi, Frontend Developer & Tech Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} app-container`}>
        {children}
      </body>
    </html>
  );
}
