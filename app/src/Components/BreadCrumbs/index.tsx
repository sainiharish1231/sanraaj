"use client";
import React from "react";
import Link from "next/link";
import { BreadCrumbContainer, Crumb } from "../../Styled/Layout/BreadCrumb";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";

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
    const path = usePathname();
    const breadcrumbs = path.split("/").filter((itm) => itm) || [];
    return (
        <BreadCrumbContainer>
            <Link href="/">
                <Crumb href="/">Home </Crumb>
            </Link>
            {breadcrumbs.map((crumb, index) => {
                let href = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
                return (
                    <Link href={href} key={crumb}>
                        <Crumb>
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                size="1x"
                                style={{ marginBottom: "2px", width: "20px" }}
                            />
                            {convertBreadcrumb(crumb)}
                        </Crumb>
                    </Link>
                );
            })}
        </BreadCrumbContainer>
    );
};

export default Breadcrumbs;
