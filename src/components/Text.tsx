import { FlipWords } from "./FlipWords";
import React from "react";

const Text = ({ children }: { children: React.ReactNode }) => {
  const value = typeof children === "string" ? children : "";
  return <FlipWords words={[value]} />;
};

export default Text;
