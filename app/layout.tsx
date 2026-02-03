import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: 'MoveWithSuryansh | Workspace Wellness Delhi NCR',
  description: 'Science-backed movement and recovery sessions for working professionals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#F9F9F7]`}>
        {children}
      </body>
    </html>
  );
}