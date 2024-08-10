import {
  springyEmojiCursor,
  trailingCursor,
  bubbleCursor,
  characterCursor,
  clockCursor,
  emojiCursor,
  fairyDustCursor,
  followingDotCursor,
  ghostCursor,
  rainbowCursor,
  snowflakeCursor,
  textFlag,
} from "cursor-effects";
import { useEffect } from "react";

export enum CursorType {
  Rainbow = "rainbow",
  Trailing = "trailing",
  Spring = "spring",
  Bubble = "bubble",
  Emoji = "emoji",
  FairyDust = "fairyDust",
  Ghost = "ghost",

  // Snowflake = "snowflake",
  // TextFlag = "textFlag",
  // Character = "character",
  // Clock = "clock",
  // FollowingDot = "followingDot",
}

const StyledCursor = ({
  emoji,
  cursorType,
}: {
  emoji: string;
  cursorType: string;
}) => {
  useEffect(() => {
    // Initialize the cursor effect
    let cursor;
    switch (cursorType) {
      case CursorType.Spring:
        cursor = springyEmojiCursor({
          emoji: emoji,
        });
        break;
      // case CursorType.Character:
      //   cursor = characterCursor();
      //   break;
      // case CursorType.Clock:
      //   cursor = clockCursor();
      //   break;
      // case CursorType.FollowingDot:
      //   cursor = followingDotCursor();
      //   break;
      // case CursorType.Snowflake:
      //   cursor = snowflakeCursor();
      //   break;
      // case CursorType.TextFlag:
      //   cursor = textFlag();
      //   break;
      case CursorType.Bubble:
        cursor = bubbleCursor();
        break;
      case CursorType.Emoji:
        cursor = emojiCursor();
        break;
      case CursorType.FairyDust:
        cursor = fairyDustCursor();
        break;
      case CursorType.Ghost:
        cursor = ghostCursor();
        break;
      case CursorType.Rainbow:
        cursor = rainbowCursor();
        break;
      case CursorType.Trailing:
        cursor = trailingCursor();
        break;
      default:
        cursor = null;
        break;
    }

    // Cleanup the effect on component unmount
    return () => cursor.destroy();
  }, [emoji, cursorType]);

  return null;
};

export default StyledCursor;
export {
  bubbleCursor,
  characterCursor,
  clockCursor,
  emojiCursor,
  fairyDustCursor,
  followingDotCursor,
  ghostCursor,
  rainbowCursor,
  snowflakeCursor,
  springyEmojiCursor,
  textFlag,
  trailingCursor,
};
