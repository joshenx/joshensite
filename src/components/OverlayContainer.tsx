import React from "react";
import styled, { css } from "styled-components";
import { ColFlex, RowFlex } from "./Flex";

const Container = styled(RowFlex).attrs({ $alignItems: "flex-end" })`
  position: absolute;
  bottom: 10px;
  padding: 0 16px;
  margin: 0 auto;
  width: 100%;
`;

const overlayTextStyles = css`
  font-size: 24px;
  text-align: center;
  font-weight: 200;
  color: #fcfcfc;
  text-transform: uppercase;
  letter-spacing: 5px;
  cursor: crosshair;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LeftText = styled.a`
  display: flex;
  opacity: 0.4;
  cursor: not-allowed;

  &:hover {
    opacity: 1;
    .arrow {
      opacity: 1;
      width: 24px;
      transition: width 0.1s ease-in-out, opacity 0.3s ease-in-out;
    }
  }

  .arrow {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    flex-wrap: nowrap;
    width: 0px;
    opacity: 0;
    transition: width 0.1s ease-in-out, opacity 0.3s ease-in-out;
  }

  .gold {
    color: gold;
  }

  .pink {
    color: hotpink;
  }
`;

const LeftStack = styled(ColFlex).attrs({ $alignItems: "flex-start" })`
  ${overlayTextStyles}
  left: 1rem;
  text-align: left;
  opacity: 1;
`;

const RightStack = styled(ColFlex).attrs({ $alignItems: "flex-end" })`
  ${overlayTextStyles}
  flex-grow: 1;
  right: 1rem;
  text-align: right;
  opacity: 1;
`;

const Link = styled.a`
  display: flex;
  opacity: 0.4;
  cursor: crosshair;

  &:hover {
    opacity: 1;
    .arrow {
      opacity: 1;
      width: 24px;
      transition: width 0.1s ease-in-out, opacity 0.3s ease-in-out;
    }
  }

  .arrow {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    flex-wrap: nowrap;
    width: 0px;
    opacity: 0;
    transition: width 0.1s ease-in-out, opacity 0.3s ease-in-out;
  }

  .red {
    color: red;
  }

  .yellow {
    color: yellow;
  }

  .green {
    color: green;
  }
`;

const OverlayContainer = () => {
  return (
    <Container>
      <LeftStack>
        <LeftText>
          <span className="arrow gold">--</span>
          joshen lim
        </LeftText>
        <LeftText>
          <span className="arrow pink">--</span>frontend engineer, singapore
        </LeftText>
      </LeftStack>
      <RightStack>
        <Link
          href="https://www.behance.net/joshenlim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="arrow red">--</span>portfolio
          <span className="arrow red">--</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/joshenxlim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="arrow yellow">--</span>linkedin
          <span className="arrow yellow">--</span>
        </Link>
        <Link
          href="https://github.com/joshenx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="arrow green">--</span>github
          <span className="arrow green">--</span>
        </Link>
      </RightStack>
    </Container>
  );
};

export default OverlayContainer;
