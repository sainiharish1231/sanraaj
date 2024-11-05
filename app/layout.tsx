import "./globals.css";
import "./_svg.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

import ThemeSwitch from "./Component/ThemeSwitch";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";

export const metadata = {
  title: "San Raj Software Solutions",
  description:
    "San Raj is a Software Development company providing technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.",
  keywords: ` "San",
  "Raj",
  "San Raj",
  "Sanraaj",
  "San Raj Software",
  "San raj Software solutions",
  "Software Solution",`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-pregular  bg-[#ffff] dark:bg-[#101118] dark:text-[#ffff] dark:text-white  text-justify">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
