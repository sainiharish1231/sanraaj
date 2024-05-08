"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BreadCrumbContainer, Crumb } from "../../Styled/Layout/BreadCrumb";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BreadCrumb {
  label: string;
  href: string;
}

const convertBreadcrumb = (string: string) => {
  return string
    .replace(/1/g, "Video Making/Editing")
    .replace(/2/g, "FullStack/VueJs Developer")
    .replace(/3/g, "React Developer")
    .replace(/4/g, "UI Designer")
    .replace(/5/g, "Senior Software Developer")
    .replace(/6/g, "PHP Developer");
};

//TODO; we will refactor this logic in future. Because this is not a permanent solution for this usecase here

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<BreadCrumb>>([]);

  return (
    <BreadCrumbContainer>
      <Link href="/">
        <Crumb href="/">Home </Crumb>
      </Link>
      {breadcrumbs.map((crumb) => (
        <Link href={crumb.href} key={crumb.label}>
          <Crumb>
            {" "}
            <FontAwesomeIcon
              icon={faAngleRight}
              size="1x"
              style={{ marginBottom: "2px", width: "20px" }}
            />{" "}
            {convertBreadcrumb(crumb.label)}
          </Crumb>
        </Link>
      ))}
    </BreadCrumbContainer>
  );
};

export default Breadcrumbs;
