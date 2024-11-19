"use client";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { AuthProvider } from "../providers";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import { useEffect } from "react";
import Script from "next/script";
import * as ga from "../../lib/ga";
import { GoogleTagManager } from "@next/third-parties/google";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isAdmin = path.startsWith("/admin");
  const gtmId = "G-CDG5HRNSY7";

  useEffect(() => {
    // Trigger pageview tracking on path change
    ga.pageview(path);
  }, [path]);

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={`${gtmId}`} />
      <body
        className={`dark:text-[#ffff] text-[#232323] z-10 w-full lg:flex justify-center`}
      >
        <AuthProvider>
          <Toaster />
          <TopNav />
          <div className="lg:max-w-7xl lg:container lg:items-center">
            {!isAdmin && <BottomNav />}
            {children}
          </div>
        </AuthProvider>

        {/* Google Analytics Scripts */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        ></script>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
