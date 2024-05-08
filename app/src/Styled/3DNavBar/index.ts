import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ul = styled.ul`
  position: relative;
  // transform: rotate(-35deg) skew(20deg, 5deg);
  transform: skew(0deg, 0deg);
  list-style: none;
`;

export const List = styled.li``;

export const Anchor = styled.a`
  background: #000;
  color: #575757;
  text-align: center;
  height: 2.5em;
  width: 4em;
  vertical-align: middle;
  line-height: 2.5em;
  border-bottom: 1px solid #060606;
  position: relative;
  display: block;
  text-decoration: none;
  box-shadow: 1em 1em 0 #e1e1e1;
  transition: all 0.25s linear;

  &:hover{
    background: #ff6e42;
    color: #fffcfb;
    transform: translate(0.4em, 0.4em);
    transition: all 0.25s linear;
    box-shadow: 1.5em 1.5em 0 #e1e1e1;

    &:after {
      // width: 1em;
      background: #b65234;
      // bottom: -2.5em;
      // right: 1em;
    }
    &:before {
      // width: 1em;
      background: #b65234;
      // top: 0.5em;
      // right: -1em;
    }
  }

  &:before, &:after {
    content: "";
    position: absolute;
    transition: all 0.25s linear;
    width: 0.5em;
  }
  &:after {
    height: 4em;
    background: #181818;
    top: -2.25em;
    left: 1.5em;
    transform: rotate(90deg) skew(0, 135deg);
  }
  &:before {
    height: 2.5em;
    background: #121212;
    bottom: 0.25em;
    left: -0.5em;
    transform: skewY(-135deg);
  }
`;
