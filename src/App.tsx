import Spline from "@splinetool/react-spline";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react95";
import styled from "styled-components";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import { ColFlex, ResponsiveFlex, RowFlex } from "./components/Flex";
import OverlayContainer from "./components/OverlayContainer.js";
import StyledCursor from "./components/StyledCursor";
import { CursorProvider, useCursor } from "./context/CursorContext";
import useWindowSize from "./hooks/useMediaQuery.js";
import Settings from "./sections/Settings";
import WorkExperience from "./sections/WorkExperience";

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

const SideProgressBar = styled(motion.div)`
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

const LoadingOverlay = styled(motion.div)`
  // center text
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  pointer-events: none;
`;

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [overlayComplete, setOverlayComplete] = useState(false);
  const { showCursor, emoji, cursorType } = useCursor();
  const { isMobile } = useWindowSize();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!isLoading) {
      scrollYProgress.set(0);
    }
  }, [isLoading]);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <WidthLimit>
      <RowFlex $alignItems="stretch">
        <Spacer />
        <SideProgressBar style={{ scaleY }} />
        <Main
          style={{
            maxHeight: !overlayComplete ? "100vh" : "auto",
            overflow: !overlayComplete ? "hidden" : "visible",
          }}
        >
          <LoadingOverlay
            initial={{ opacity: 1 }}
            animate={{
              opacity: isLoading ? 1 : 0,
            }}
            transition={{ duration: 2, delay: 1, ease: "easeIn" }}
            onAnimationComplete={() => {
              setTimeout(() => setOverlayComplete(true), 3000);
            }}
          >
            <ColFlex $gap={16}>
              <ProgressBar
                variant="tile"
                value={isLoading ? 80 : 100}
                style={{ width: "40vw" }}
              />
              {isLoading ? "Loading..." : "Hello!"}
            </ColFlex>
          </LoadingOverlay>
          {showCursor && <StyledCursor emoji={emoji} cursorType={cursorType} />}
          <Section>
            <Container>
              <Frame>
                <Spline
                  scene="https://prod.spline.design/BQ8Xe7yObEeaN50O/scene.splinecode"
                  onLoad={handleLoad}
                />
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeIn" }}
      >
        <div className="noise"></div>
      </motion.div>
    </WidthLimit>
  );
};

const App = () => (
  <CursorProvider>
    <AppContent />
  </CursorProvider>
);

export default App;
