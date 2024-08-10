import React, { SyntheticEvent } from "react";
import { Button, GroupBox, Select, TextInput } from "react95";
import styled from "styled-components";
import { ColFlex, RowFlex } from "../components/Flex";
import { CursorType } from "../components/StyledCursor";
import Text from "../components/Text";
import { Header } from "../App";
import { useCursor } from "../context/CursorContext";

const Container = styled(ColFlex).attrs({ $gap: 16 })`
  height: 100vh;
  width: 100%;
  max-width: 1920px;
  padding: 32px;
`;

const ToggleCursorButton = styled(Button)`
  width: fit-content;
`;

const StyledTextInput = styled(TextInput)`
  width: 64px;
`;

const Settings = () => {
  const {
    showCursor,
    setShowCursor,
    cursorType,
    setCursorType,
    emoji,
    setEmoji,
  } = useCursor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmoji(e.target.value);

  const toggleCursor = () => {
    setShowCursor(!showCursor);
  };

  const handleCursorTypeChange = (
    selectedOption: { value: CursorType },
    options: { fromEvent: Event | SyntheticEvent<Element, Event> }
  ) => {
    setCursorType(selectedOption.value);
  };

  const options = Object.values(CursorType).map((type) => ({
    value: type,
    label: type,
  }));

  return (
    <Container>
      <Header>
        {showCursor ? (
          <Text key="cursor-settings-header-enabled">
            hey, let's make this fun.
          </Text>
        ) : (
          <Text key="cursor-settings-header-disabled">
            i'm disappointed, but i'm sure you have your reasons.
          </Text>
        )}
      </Header>
      <GroupBox label="cursor">
        <RowFlex $gap={16}>
          <Select
            defaultValue={cursorType}
            options={options}
            menuMaxHeight={160}
            width={160}
            onChange={handleCursorTypeChange}
            style={{ flex: 1 }}
          />
          <ToggleCursorButton onClick={toggleCursor}>
            {showCursor ? "Disable" : "Enable"} trail
          </ToggleCursorButton>
          {cursorType === CursorType.Spring && (
            <StyledTextInput
              variant="flat"
              value={emoji}
              placeholder="Emoji"
              onChange={handleChange}
              disabled={!showCursor}
            />
          )}
        </RowFlex>
      </GroupBox>
    </Container>
  );
};

export default Settings;
