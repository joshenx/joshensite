import "@mantine/core/styles.css";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "./style.css";

import { styleReset } from "react95";

import original from "react95/dist/themes/original";

import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from "react95";
import styled from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

root.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <App />
    </ThemeProvider>
  </>
);
