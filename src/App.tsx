import Spline from "@splinetool/react-spline";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { Suspense } from "react";
import styled from "styled-components";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import { ColFlex, ResponsiveFlex, RowFlex } from "./components/Flex";
import OverlayContainer from "./components/OverlayContainer.js";
import StyledCursor from "./components/StyledCursor";
import { CursorProvider, useCursor } from "./context/CursorContext";
import Loader from "./Loader.jsx";
import Settings from "./sections/Settings";
import WorkExperience from "./sections/WorkExperience.js";
import useWindowSize from "./hooks/useMediaQuery.js";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 32px;
`;

const Frame = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const Main = styled(ColFlex).attrs({ $gap: 16, $alignItems: "center" })`
  flex-grow: 1;
`;

const Spacer = styled.div`
  display: flex;
  width: 10px;
  background: gray;
  opacity: 0.02;
`;

const Section = styled.section`
  color: white;
  width: 100%;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: -100vh;
  left: 0;
  bottom: 0;
  width: 10px;
  background: linear-gradient(
    to top,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
`;

const WidthLimit = styled.div`
  max-width: min(100vw, 1920px);
  margin: auto;
`;

export const Header = styled.div`
  overflow-wrap: break-word;
  font-size: 1.5rem;
  max-width: 300px;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
`;

export const Title = styled.div`
  font-size: 2rem;
`;

const AppContent = () => {
  const { showCursor, emoji, cursorType } = useCursor();
  const { isMobile } = useWindowSize();

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <WidthLimit>
      <RowFlex $alignItems="stretch">
        <Spacer />
        <ProgressBar style={{ scaleY }} />
        <Main>
          {showCursor && <StyledCursor emoji={emoji} cursorType={cursorType} />}

          <Section>
            <Container>
              <Frame>
                <Suspense fallback={<Loader />}>
                  <Spline scene="https://prod.spline.design/BQ8Xe7yObEeaN50O/scene.splinecode" />
                </Suspense>
                <OverlayContainer />
              </Frame>
            </Container>
          </Section>
          <ResponsiveFlex style={{ width: "100%" }}>
            <FadeInWhenVisible
              style={{
                display: "flex",
                width: isMobile ? "100%" : undefined,
              }}
            >
              <Section>
                <Settings />
              </Section>
            </FadeInWhenVisible>
            <FadeInWhenVisible
              style={{
                display: "flex",
                flexGrow: 1,
                borderLeft: isMobile
                  ? "none"
                  : "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Section>
                <WorkExperience />
              </Section>
            </FadeInWhenVisible>
          </ResponsiveFlex>
        </Main>
      </RowFlex>
      <div className="noise"></div>
    </WidthLimit>
  );
};

const App = () => (
  <CursorProvider>
    <AppContent />
  </CursorProvider>
);

export default App;
