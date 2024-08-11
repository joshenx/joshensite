import { useState, useEffect } from "react";

interface MediaQueryData {
  isMobile: boolean;
  width: number;
  height: number;
}

const useWindowSize = (): MediaQueryData => {
  const [windowSize, setWindowSize] = useState<MediaQueryData>({
    isMobile: false,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        isMobile: window.innerWidth < 768,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
