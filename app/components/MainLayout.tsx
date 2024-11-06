"use client";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { AuthProvider, Providers } from "../providers";
import ThemeSwitch from "./ThemeSwitch";
import Navbar from "./Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isAdmin = path.startsWith("/admin");

  return (
    <html lang="en" suppressHydrationWarning>
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
