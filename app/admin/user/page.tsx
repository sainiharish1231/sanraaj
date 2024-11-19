"use client";
import User from "@/app/components/Admin/User/User";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const getAllUser = async (token: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user`, {
    cache: "no-cache",
    headers: {
      authorization: `${token}`,
    },
  });

  const result = await response.json();
  return result;
};

const user: React.FC = () => {
  const { data: session }: any = useSession();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.token) {
        try {
          const user = await getAllUser(session?.user?.token);
          setUser(user?.data || null);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      }
    };
    fetchData();
  }, [session]);

  return (
    <>
      <div>{user && <User users={user} />}</div>
    </>
  );
};

export default user;
