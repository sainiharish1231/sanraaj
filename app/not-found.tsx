"use client";
// #region Global Imports
import * as React from "react";
import { ApodButton } from "./src/Styled/Home";
import Link from "next/link";
import DetailsLayout from "./src/Components/Layout/DetailsLayout";
import { Container, H2 } from "./src/Components/common";
// #endregion Interface Imports

const Custom404 = () => {
    const [path, setPath] = React.useState<string>("");

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const newPath = window.location.href.split("/").pop();
            if (newPath) {
                setPath(newPath);
            }
        }
    }, []);

    return (
        <DetailsLayout title="Page Not Found">
            <Container className="h-[350px]">
                <div className="justify-center w-[500px] flex">
                    <h2 className="">{`${path}: `}</h2>
                    <H2>Page NotFound</H2>
                </div>
                <Link href="/">
                    <ApodButton>{`BackHome`}</ApodButton>
                </Link>
            </Container>
        </DetailsLayout>
    );
};

export default Custom404;
