"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const user = session?.user;

  const userName = user?.name || "";
  const userImage = user?.image;

  // const user = "f;ldg";
  // const userName = "dnfj";
  // const userImage = "mlfd";

  return (
    <div className="flex flex-col items-center p-4  mt-20 justify-center">
      <h2 className=" flex justify-center mb-10 text-2xl font-bold sm:text-xl">
        Public Profile
      </h2>
      {(userImage || userName) && (
        <div className="object-cover text-8xl flex justify-center items-center p-1 rounded-full ring-2 ring-[#9333ea] dark:ring-[#9333ea] h-[150px] w-[150px]">
          {userImage ? (
            <Image
              className="object-cover rounded-full"
              src={userImage}
              alt={userName}
              width={150}
              height={150}
            />
          ) : (
            userName.slice(0, 1).toUpperCase()
          )}
        </div>
      )}
      <div>
        <h2 className=" mt-10 flex justify-center text-2xl font-bold sm:text-xl">
          {userName.slice(0, 1).toUpperCase()}
          {userName.slice(1, userName.length)}
        </h2>
        <h2 className=" flex justify-center text-xl font-bold sm:text-xl">
          {user?.email}
        </h2>
      </div>
      <div className="flex flex-col space-y-5 mt-10">
        {/* <div className="flex justify-center mt-4">
    <button
      type="button"
      className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-indigo-100 dark:bg-[#ffffff] rounded-xl hover:bg-white group py-1.5 px-2.5"
    >
      <span className="flex justify-center w-[300px] h-48 rounded bg-[#9333ea] absolute bottom-0 left-0 translate-y-full ease-out duration-[1300ms] transition-all group-hover:mb-0 group-hover:translate-y-0"></span>
      <span>
        <Link
          className="relative justify-center text-left text-black duration-[1300ms] w-10 ease-out text-xl group-hover:text-white"
          href={``}
        >
          Update Profile
        </Link>
      </span>
    </button>
  </div> */}
        <div className="flex justify-center   ">
          <button
            onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
            type="button"
            className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-[#9333ea] rounded-xl hover:bg-white group py-1.5 px-2.5"
          >
            <span className="flex justify-center w-[301px] h-48 rounded bg-[#f86363] absolute bottom-0 left-0 translate-y-full ease-out duration-[1300ms] transition-all group-hover:mb-0 group-hover:translate-y-0"></span>
            <section id="Logout">
              <div className=" justify-center flex  relative items-center text-white duration-[1300ms] w-10 ease-out text-xl group-hover:text-white">
                Logout
              </div>
            </section>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
