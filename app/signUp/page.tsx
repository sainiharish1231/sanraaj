import React from "react";
import SignUp from "../components/SignUp";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SingupPage = async () => {
  const session: any = await getServerSession();
  if (session) redirect("Profile");

  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SingupPage;
