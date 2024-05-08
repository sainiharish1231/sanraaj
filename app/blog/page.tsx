"use client";
import React from "react";
import { NextPage } from "next";

import { withTranslation } from "next-i18next";

import { ReduxNextPageContext, IBlog } from "@/app/src/Interfaces";
import Box from "@/app/src/Components/3DBox";

export const Blog: NextPage<IBlog.IProps, IBlog.InitialProps> = () => <Box />;

Blog.getInitialProps = async (
  ctx: ReduxNextPageContext
): Promise<IBlog.InitialProps> => {
  return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Blog);
