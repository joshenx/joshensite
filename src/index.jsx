import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Loader from "./Loader.jsx";
import { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import "@mantine/core/styles.css";
import HeaderMegaMenu from "./components/HeaderMegaMenu/index.jsx";

import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <MantineProvider defaultColorScheme="dark">
      <HeaderMegaMenu />
      <Suspense fallback={<Loader />}>
        <Spline scene="https://prod.spline.design/BQ8Xe7yObEeaN50O/scene.splinecode" />
      </Suspense>
      <div className="welcome-text">joshen.dev</div>
      <div className="noise"></div>
    </MantineProvider>
  </>
);
