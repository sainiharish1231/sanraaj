"use client";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { AuthProvider, Providers } from "../providers";
import ThemeSwitch from "./ThemeSwitch";
import Navbar from "./Navbar";
import NewsService from "@/services/NewsService";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isAdmin = path.startsWith("/admin");

  const singleNews = (await NewsService.getData("/").catch(() => null))?.data;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{singleNews.title}</title>
        <meta name="description" content={singleNews.description} />
        <meta name="keywords" content={singleNews.keywords} />

        <meta property="og:description" content={singleNews.description} />
      </head>
      <body
        className={` dark:text-[#ffff]
     text-[#232323] z-10 `}
      >
        <AuthProvider>
          <Toaster />
          <div className="flex justify-center  w-full items-center ">
            <Providers>
              <ThemeSwitch />
              {!isAdmin && <Navbar />}

              {children}
            </Providers>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
