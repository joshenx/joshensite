import React, { SyntheticEvent } from "react";
import {
  Button,
  GroupBox,
  Select,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import styled from "styled-components";
import { ColFlex, RowFlex } from "../components/Flex";
import { CursorType } from "../components/StyledCursor";
import Text from "../components/Text";
import { Header, Title } from "../App";
import { useCursor } from "../context/CursorContext";
import { experiences } from "../experience"; // Import experiences

const Container = styled(ColFlex).attrs({ $gap: 16 })`
  width: 100%;
  max-width: 1920px;
  padding: 32px;

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const ToggleCursorButton = styled(Button)`
  width: fit-content;
`;

const StyledTextInput = styled(TextInput)`
  width: 64px;
`;

const WorkExperience = () => {
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
      <Title>
        <Text>work experience</Text>
      </Title>
      <ColFlex $gap={16}>
        {experiences.map((experience, index) => (
          <GroupBox
            key={index}
            label={
              experience.companyLink ? (
                <a href={`${experience.companyLink}`}>{experience.company}</a>
              ) : (
                experience.company
              )
            }
          >
            <RowFlex $gap={16}>
              <RowFlex $gap={8} $grow={1}>
                <p>Role: </p>
                <TextInput
                  value={experience.position}
                  style={{ width: "100%" }}
                />
              </RowFlex>
              <RowFlex $gap={8} $grow={2}>
                <p>Duration: </p>
                <TextInput
                  value={`${experience.startMonth} ${experience.startYear} - ${
                    experience.endYear && experience.endMonth
                  } ${!experience.endYear ? "Present" : experience.endYear}`}
                  style={{ width: "100%" }}
                />
              </RowFlex>
            </RowFlex>
            {/* <ul>
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>- {responsibility}</li>
                  ))}
                </ul> */}
          </GroupBox>
        ))}
      </ColFlex>
    </Container>
  );
};

export default WorkExperience;
