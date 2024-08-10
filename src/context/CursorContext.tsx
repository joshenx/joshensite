import React, { createContext, useContext, useState } from "react";
import { CursorType } from "../components/StyledCursor";

interface CursorContextProps {
  showCursor: boolean;
  setShowCursor: (show: boolean) => void;
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  emoji: string;
  setEmoji: (emoji: string) => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showCursor, setShowCursor] = useState(true);
  const [cursorType, setCursorType] = useState<CursorType>(CursorType.Spring);
  const [emoji, setEmoji] = useState("🎵");

  return (
    <CursorContext.Provider
      value={{
        showCursor,
        setShowCursor,
        cursorType,
        setCursorType,
        emoji,
        setEmoji,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
