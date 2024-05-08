"use client";
import React from "react";
import { Container, Ul, List, Anchor } from "../../Styled/3DNavBar";

const NavBar = () => {
  return (
    <Container>
      <Ul>
        <List>
          <Anchor>
            <span>A</span>
          </Anchor>
        </List>

        <List>
          <Anchor>
            <span>A</span>
          </Anchor>
        </List>
        <List>
          <Anchor>
            <span>A</span>
          </Anchor>
        </List>
      </Ul>
    </Container>
  );
};

export default NavBar;
