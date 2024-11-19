"use client";
import { useSession } from "next-auth/react";
import { LeftSlider } from "../components/Admin/Heder/LeftSlider";
import { AuthProvider } from "../providers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { data: session, status }: any = useSession();

  const user = session?.user;

  useEffect(() => {
    if (
      status === "unauthenticated" ||
      (status === "authenticated" && user.isAdmin === "false")
    ) {
      router.push("/");
    }
  }, [status, user]);

  if (
    status === "loading" ||
    user?.isAdmin === "false" ||
    status === "unauthenticated"
  ) {
    return <div>Loading...</div>;
  }

  return (
    <AuthProvider>
      <div className="flex w-full h-screen mt-[70px]">
        <div className="fixed left-0  h-full">
          <LeftSlider />
        </div>
        <div className="w-full ml-[200px] ">{children}</div>
      </div>
    </AuthProvider>
  );
}
