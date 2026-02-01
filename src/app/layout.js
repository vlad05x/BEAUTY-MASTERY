import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NATALIA | Premium Beauty & Permanent Makeup",
  description: "Experience the pinnacle of beauty with Elena. Specialized in permanent makeup, lip augmentation, and professional beauty training.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
