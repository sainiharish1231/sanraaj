"use client";
import React, { useState } from "react";
import { Container, Cube, Face } from "../../Styled/3DBox";

const Box = () => {
    const [hoverActive, setHoverActive] = useState(-1);
    const [stableHover, setStatbleHover] = useState(false);
    const faces = new Array(12).fill("");
    const mouseEntered = (i: number) => {
        setHoverActive(hoverActive >= 0 ? -1 : i);
        if (hoverActive === -1) {
            setTimeout(() => {
                setStatbleHover(true);
            });
        } else {
            setStatbleHover(false);
        }
    };

    return (
        <Container
            className={`${hoverActive > -1 ? "hover-active" : ""} ${
                stableHover ? "stable-hover" : ""
            }`}
        >
            <Cube>
                {faces.map((_, i) => (
                    <Face
                        key={i}
                        onClick={() => mouseEntered(i)}
                        screen={i + 1}
                        className={hoverActive === i ? "hovered" : ""}
                    >
                        {i + 1}
                    </Face>
                ))}
            </Cube>
        </Container>
    );
};

export default Box;
