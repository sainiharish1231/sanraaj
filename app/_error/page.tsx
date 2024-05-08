"use client";
// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "next-i18next";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "../src/Interfaces";
// #endregion Interface Imports

const Error: NextPage<IErrorPage.IProps, IErrorPage.InitialProps> = ({
  t,
  statusCode,
}) => {
  return (
    <div>
      {t("common:Error")}
      {statusCode}
    </div>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: ["common"],
    statusCode,
  };
};

export default withTranslation("common")(Error);
