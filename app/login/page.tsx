import React from "react";
import Login from "../components/Login";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
const LoginPage = async () => {
  const session = await getServerSession();
  if (session) redirect("profile");

  return <Login />;
};

export default LoginPage;
