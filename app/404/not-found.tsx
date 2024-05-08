"use client";
// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "next-i18next";
import { Container, TopText, ApodButton } from "../src/Styled/Home";
import Link from "next/link";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "../src/Interfaces";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";
// #endregion Interface Imports

const Custom404: NextPage<IErrorPage.IProps> = ({ t }) => {
  return (
    <DetailsLayout title="Page Not Found">
      <Container>
        <TopText>{t("common:NotFound")}</TopText>
        <Link href="/">
          <ApodButton>{t("common:BackHome")}</ApodButton>
        </Link>
      </Container>
    </DetailsLayout>
  );
};

export default withTranslation("common")(Custom404);
